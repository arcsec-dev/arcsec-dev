from typing import List


class PromptBuilder:
    """
    Builds standardized prompts for AI code repair providers.
    """

    @staticmethod
    def build_prompt(
        file_path: str,
        source_code: str,
        findings: List[dict],
    ) -> str:

        findings_text = ""

        for index, finding in enumerate(findings, start=1):
            findings_text += (
                f"{index}.\n"
                f"Rule: {finding.get('rule', 'Unknown')}\n"
                f"Severity: {finding.get('severity', 'Unknown')}\n"
                f"Line: {finding.get('line', 'Unknown')}\n"
                f"Message: {finding.get('message', 'No description')}\n\n"
            )

        prompt = f"""
You are a senior Application Security Engineer.

Your task is to repair ONLY the security vulnerabilities listed below.

Requirements:
- Fix ONLY the reported vulnerabilities.
- Preserve the original functionality.
- Do not introduce new features.
- Do not remove comments unless absolutely necessary.
- Keep the original formatting whenever possible.
- Return the COMPLETE corrected source file.
- Return ONLY source code.
- Do NOT use markdown.
- Do NOT explain your changes.
- Do NOT truncate the file.
- If multiple vulnerabilities exist, fix all of them.

FILE:
{file_path}

SECURITY FINDINGS:
{findings_text}

SOURCE CODE:
{source_code}
"""

        return prompt.strip()