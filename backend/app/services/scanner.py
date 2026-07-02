import json
import subprocess
from pathlib import Path

from app.models.finding import Finding
from app.services.snippet import extract_snippet


SEVERITY_MAP = {
    "ERROR": "CRITICAL",
    "WARNING": "MEDIUM",
    "INFO": "LOW",
}


def run_security_scan(project_path: Path) -> list[Finding]:
    """
    Run Semgrep against a project and return Finding objects.
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

    if result.returncode not in (0, 1):
        raise RuntimeError(result.stderr)

    try:
        data = json.loads(result.stdout)

    except json.JSONDecodeError:
        raise RuntimeError(
            "Failed to parse Semgrep output."
        )

    findings: list[Finding] = []

    print(f"Semgrep findings: {len(data.get('results', []))}")

    for issue in data.get("results", []):

        raw_severity = (
            issue["extra"]
            .get("severity", "UNKNOWN")
            .upper()
        )

        severity = SEVERITY_MAP.get(
            raw_severity,
            raw_severity,
        )

        file_path = issue["path"]
        line = issue["start"]["line"]

        snippet = extract_snippet(
            project_path,
            file_path,
            line,
        )

        findings.append(
            Finding(
                title=issue["check_id"],
                severity=severity,
                file=file_path,
                line=line,
                message=issue["extra"]["message"],
                source="Semgrep",
                snippet=snippet,
            )
        )

    print(f"Parsed findings: {len(findings)}")

    return findings