import json
import subprocess
from pathlib import Path
from typing import Any


def run_security_scan(project_path: Path) -> list[dict[str, Any]]:
    """
    Run a Semgrep security scan against the extracted project.
    Returns a list of security findings.
    """

    try:
        result = subprocess.run(
            [
                "semgrep",
                "--config=auto",
                "--json",
                "--no-git-ignore",
                str(project_path),
            ],
            capture_output=True,
            text=True,
            encoding="utf-8",
            errors="ignore",
        )
    except FileNotFoundError:
        raise RuntimeError(
            "Semgrep is not installed or not available in PATH."
        )

    # Semgrep returns:
    # 0 = no findings
    # 1 = findings found
    if result.returncode not in (0, 1):
        raise RuntimeError(result.stderr)

    try:
        data = json.loads(result.stdout)
    except json.JSONDecodeError:
        raise RuntimeError(
            f"Failed to parse Semgrep JSON output:\n{result.stdout}"
        )

    print(f"Semgrep return code: {result.returncode}")
    print(f"Semgrep findings: {len(data.get('results', []))}")

    findings = []

    for issue in data.get("results", []):
        findings.append(
            {
                "title": issue["check_id"],
                "severity": issue["extra"].get("severity", "UNKNOWN"),
                "file": issue["path"],
                "line": issue["start"]["line"],
                "message": issue["extra"]["message"],
            }
        )

    print(f"Parsed findings: {len(findings)}")

    return findings