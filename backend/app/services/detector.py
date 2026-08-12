from pathlib import Path


def detect_project_type(project_path: str) -> str:
    """
    Detect the type of project based on common build/configuration files.
    """

    root = Path(project_path)

    if (root / "package.json").exists():
        return "Node.js"

    if (root / "requirements.txt").exists():
        return "Python"

    if (root / "pyproject.toml").exists():
        return "Python"

    if (root / "pom.xml").exists():
        return "Java"

    if (root / "build.gradle").exists():
        return "Java"

    if (root / "Cargo.toml").exists():
        return "Rust"

    if (root / "go.mod").exists():
        return "Go"

    return "Unknown"