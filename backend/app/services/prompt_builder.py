from typing import List


class PromptBuilder:
    """
    Builds standardized prompts for AI code repair providers.
    """

    RULE_REMEDIATION = {
        "opengrep-rules.python-shell-true": """
- Remove shell=True from the reported command execution.
- Do not replace shell=True with another shell execution mechanism.
- Prefer subprocess.run() with a list of arguments and shell=False.
""",

        "opengrep-rules.python-os-system": """
- Remove os.system() from the reported code.
- Do NOT retain os.system() in any form.
- Do NOT replace it with os.popen(), subprocess(..., shell=True), eval(), exec(), or another shell-based execution API.
- If command execution is genuinely required, use an explicit allowlist of permitted commands and subprocess.run() with shell=False.
- If the command is only present for demonstration/testing purposes, remove the command execution entirely.
""",

        "opengrep-rules.python-os-popen": """
- Remove os.popen() from the reported code.
- Do NOT replace it with os.system(), subprocess(..., shell=True), or another shell-based execution API.
- If command execution is genuinely required, use an explicit allowlist and subprocess.run() with shell=False.
- If the functionality is unnecessary, remove it.
""",

        "opengrep-rules.python-eval": """
- The final source code MUST NOT contain the token eval anywhere.
- Completely remove eval() from the repaired file.
- Do NOT use eval() even with restricted __builtins__.
- Do NOT use eval() inside try/except.
- Do NOT mention or demonstrate eval() in executable code.
- Replace the expression evaluation with explicit application logic or a fixed allowlist.
- For this test case, if the original expression functionality cannot be safely preserved, remove the evaluation entirely.
""",

        "opengrep-rules.python-exec": """
- Remove exec() completely.
- Do NOT keep exec() with restricted __builtins__.
- Do NOT replace it with compile() or another dynamic execution mechanism.
- Replace dynamic execution with explicit application logic or an allowlist of permitted operations.
""",

        "opengrep-rules.python-compile": """
- Remove compile() when it processes the reported untrusted input.
- Do NOT replace it with eval(), exec(), or another dynamic execution mechanism.
- Replace dynamic compilation with explicit, constrained application logic.
""",

        "opengrep-rules.pickle-load": """
- Remove pickle.loads() for the reported untrusted input.
- Do NOT deserialize untrusted data using pickle.
- Prefer JSON or another safe, data-only serialization format.
""",

        "opengrep-rules.pickle-load-file": """
- Remove pickle.load() for untrusted files.
- Do NOT deserialize untrusted data using pickle.
- Prefer JSON or another safe, data-only serialization format.
""",

        "opengrep-rules.yaml-unsafe-load": """
- Replace yaml.load() with yaml.safe_load().
- Do not use yaml.load() for untrusted input.
""",

        "opengrep-rules.python-md5": """
- Remove MD5 for security-sensitive hashing.
- Use SHA-256 or a password-specific password hashing algorithm where appropriate.
- Do not merely suppress the finding.
""",

        "opengrep-rules.python-sha1": """
- Remove SHA-1 for security-sensitive hashing.
- Use SHA-256 or a stronger cryptographic algorithm where appropriate.
- Do not merely suppress the finding.
""",

        "opengrep-rules.python-requests-verify-false": """
- Remove verify=False.
- TLS certificate verification must remain enabled.
- Use the default requests certificate verification behavior or a properly configured trusted CA bundle.
""",

        "opengrep-rules.flask-debug": """
- Remove debug=True.
- Set debug=False or remove the debug argument.
- Do not expose Flask debug mode in the repaired application.
""",
    }

    @staticmethod
    def build_prompt(
        file_path: str,
        source_code: str,
        findings: List[dict],
    ) -> str:

        findings_text = ""
        remediation_text = ""

        for index, finding in enumerate(findings, start=1):

            # The OpenGrep check_id is stored in Finding.title.
            rule = finding.get("title", "Unknown")

            findings_text += (
                f"{index}.\n"
                f"Rule: {rule}\n"
                f"Severity: {finding.get('severity', 'Unknown')}\n"
                f"Line: {finding.get('line', 'Unknown')}\n"
                f"Message: {finding.get('message', 'No description')}\n\n"
            )

            specific_remediation = PromptBuilder.RULE_REMEDIATION.get(rule)

            if specific_remediation:
                remediation_text += (
                    f"\n[{rule}]\n"
                    f"{specific_remediation}\n"
                )

        prompt = f"""
You are a senior Application Security Engineer performing a security remediation.

Your task is to repair ONLY the security vulnerabilities listed below.

CRITICAL SECURITY REQUIREMENTS:

1. Fix every reported vulnerability.
2. The repaired source code will be scanned again by OpenGrep.
3. The repair is considered successful ONLY when the reported security pattern is actually removed.
4. Do NOT attempt to hide, suppress, rename, obfuscate, sandbox, bypass, or disguise a security rule.
5. Do NOT add OpenGrep suppression comments.
6. Do NOT disable the scanner.
7. Do NOT simply make dangerous functionality "safer" while keeping the vulnerable API when the rule requires its removal.
8. Remove dangerous APIs when the remediation guidance explicitly requires their removal.
9. Preserve legitimate application functionality whenever reasonably possible.
10. Do not introduce new vulnerabilities.
11. Do not introduce new dependencies unless absolutely necessary.
12. Return the COMPLETE corrected source file.
13. Return ONLY source code.
14. Do NOT use Markdown.
15. Do NOT include ``` fences.
16. Do NOT explain your changes.
17. Do NOT truncate the file.
18. Fix ALL reported vulnerabilities, not only the first one.

SECURITY FINDINGS:
{findings_text}

RULE-SPECIFIC REMEDIATION REQUIREMENTS:
{remediation_text}

FILE:
{file_path}

SOURCE CODE:
{source_code}

FINAL VALIDATION:

Before returning the source code, mentally verify every reported rule.

The repaired source must NOT contain the vulnerable API or pattern identified by each rule.

If a dangerous API cannot be safely preserved, remove it and replace it with explicit, constrained application logic.

Return ONLY the complete repaired source file.
"""

        return prompt.strip()