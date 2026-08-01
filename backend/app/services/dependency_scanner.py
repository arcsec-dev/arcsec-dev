from pathlib import Path

from app.models.finding import Finding

# MVP vulnerability database.
# Later this will be replaced by the OSV API or GitHub Security Advisories.

VULNERABLE_PACKAGES = {
    "flask": {
        "1.1.2": {
            "severity": "HIGH",
            "recommended": "3.1.0",
            "message": "Flask 1.1.2 contains known security vulnerabilities.",
        },
    },
    "werkzeug": {
        "0.16.0": {
            "severity": "HIGH",
            "recommended": "3.1.3",
            "message": "Werkzeug 0.16.0 contains known security vulnerabilities.",
        },
    },
    "jinja2": {
        "2.10.1": {
            "severity": "HIGH",
            "recommended": "3.1.6",
            "message": "Jinja2 2.10.1 contains known security vulnerabilities.",
        },
    },
    "requests": {
        "2.20.0": {
            "severity": "MEDIUM",
            "recommended": "2.32.4",
            "message": "Requests 2.20.0 contains known security vulnerabilities.",
        },
    },
    "pyyaml": {
        "5.1": {
            "severity": "HIGH",
            "recommended": "6.0.2",
            "message": "PyYAML 5.1 contains known security vulnerabilities.",
        },
    },
}


def scan_dependencies(project_path: Path) -> list[Finding]:
    """
    Scan all requirements.txt files inside the project and detect
    vulnerable dependency versions.

    Returns:
        list[Finding]
    """

    findings: list[Finding] = []

    for requirements in project_path.rglob("requirements.txt"):

        try:
            relative_path = requirements.relative_to(project_path)
        except ValueError:
            relative_path = requirements.name

        lines = requirements.read_text(
            encoding="utf-8",
            errors="ignore",
        ).splitlines()

        for line_number, line in enumerate(lines, start=1):

            line = line.strip()

            # Ignore blank lines and comments
            if not line or line.startswith("#"):
                continue

            # Only support package==version
            if "==" not in line:
                continue

            try:
                package, version = line.split("==", 1)
            except ValueError:
                continue

            package = package.strip().lower()
            version = version.strip()

            if package not in VULNERABLE_PACKAGES:
                continue

            if version not in VULNERABLE_PACKAGES[package]:
                continue

            vuln = VULNERABLE_PACKAGES[package][version]

            findings.append(
                Finding(
                    title=f"Outdated Dependency: {package}",
                    severity=vuln["severity"],
                    file=str(relative_path),
                    line=line_number,
                    message=(
                        f"{package} {version} is vulnerable. "
                        f"Upgrade to {vuln['recommended']}."
                    ),
                    source="Dependency Scanner",
                )
            )

    return findings