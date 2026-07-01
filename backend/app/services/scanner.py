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
                str(project_path),
            ],
            capture_output=True,
            text=True,
        )
    except FileNotFoundError:
        raise RuntimeError(
            "Semgrep is not installed or not available in PATH."
        )

    if result.returncode not in (0, 1):
        raise RuntimeError(result.stderr)

    data = json.loads(result.stdout)

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

    return findings