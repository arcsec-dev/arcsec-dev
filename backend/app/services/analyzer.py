from pathlib import Path


def analyze_project(project_path: Path, project_name: str):
    file_count = 0
    directory_count = 0

    languages = set()
    framework = "Unknown"

    for item in project_path.rglob("*"):

        if item.is_dir():
            directory_count += 1
            continue

        file_count += 1

        suffix = item.suffix.lower()

        if suffix == ".py":
            languages.add("Python")

        elif suffix == ".js":
            languages.add("JavaScript")

        elif suffix == ".ts":
            languages.add("TypeScript")

        elif suffix == ".java":
            languages.add("Java")

        elif suffix == ".go":
            languages.add("Go")

        elif suffix == ".rs":
            languages.add("Rust")

        # Detect framework

        if item.name == "package.json":
            text = item.read_text(errors="ignore").lower()

            if '"next"' in text:
                framework = "Next.js"

            elif '"react"' in text:
                framework = "React"

            elif '"vue"' in text:
                framework = "Vue"

        elif item.name == "requirements.txt":
            text = item.read_text(errors="ignore").lower()

            if "fastapi" in text:
                framework = "FastAPI"

            elif "django" in text:
                framework = "Django"

            elif "flask" in text:
                framework = "Flask"

    return {
        "projectName": project_name,
        "language": sorted(list(languages)),
        "framework": framework,
        "files": file_count,
        "directories": directory_count,
    }