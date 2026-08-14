import json
import subprocess
from pathlib import Path

from app.models.finding import Finding
from app.services.snippet import extract_snippet


# Convert OpenGrep severities into ArcSec severities
SEVERITY_MAP = {
    "ERROR": "CRITICAL",
    "WARNING": "MEDIUM",
    "INFO": "LOW",
}


def run_security_scan(project_path: Path) -> list[Finding]:
    """
    Run an OpenGrep security scan against the extracted project.

    Returns a list of normalized ArcSec Finding objects.
    """

    # Locate the OpenGrep rules folder
    rules_path = Path(__file__).resolve().parents[2] / "opengrep-rules"

    # Verify the rules folder exists
    if not rules_path.exists():
        raise RuntimeError(
            f"OpenGrep rules folder not found: {rules_path}"
        )

    try:
        result = subprocess.run(
            [
                "opengrep",
                "--config",
                str(rules_path),
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
            "OpenGrep is not installed or not available in PATH."
        )

    # OpenGrep:
    # 0 = No findings
    # 1 = Findings detected
    if result.returncode not in (0, 1):
        raise RuntimeError(
            result.stderr if result.stderr else result.stdout
        )

    try:
        data = json.loads(result.stdout)

    except json.JSONDecodeError:
        raise RuntimeError(
            "Failed to parse OpenGrep output."
        )

    findings: list[Finding] = []

    for issue in data.get("results", []):

        raw_severity = (
            issue.get("extra", {})
            .get("severity", "UNKNOWN")
            .upper()
        )

        severity = SEVERITY_MAP.get(
            raw_severity,
            raw_severity,
        )

        original_path = Path(
            issue.get("path", "")
        )

        try:
            relative_path = original_path.relative_to(
                project_path
            )

        except ValueError:
            try:
                parts = original_path.parts

                if project_path.name in parts:
                    index = parts.index(project_path.name)
                    relative_path = Path(
                        *parts[index + 1:]
                    )
                else:
                    relative_path = Path(
                        original_path.name
                    )

            except Exception:
                relative_path = Path(
                    original_path.name
                )

        line = (
            issue.get("start", {})
            .get("line", 0)
        )

        snippet = extract_snippet(
            project_path,
            str(original_path),
            line,
        )

        findings.append(
            Finding(
                title=issue.get(
                    "check_id",
                    "OpenGrep Finding",
                ),
                severity=severity,
                file=str(relative_path),
                line=line,
                message=issue.get(
                    "extra",
                    {}
                ).get(
                    "message",
                    "Security issue detected by OpenGrep.",
                ),
                source="OpenGrep",
                snippet=snippet,
            )
        )

    return findings