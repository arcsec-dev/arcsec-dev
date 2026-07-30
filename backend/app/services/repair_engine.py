import re
import shutil
from pathlib import Path


class RepairEngine:
    """
    MVP Repair Engine

    Supported repairs:
    - Flask debug=True
    - shell=True
    - Hardcoded secrets
    """

    def repair_project(self, project_path: Path) -> dict:
        repaired_path = project_path.parent / f"{project_path.name}_repaired"

        if repaired_path.exists():
            shutil.rmtree(repaired_path)

        shutil.copytree(project_path, repaired_path)

        applied = []
        manual = []

        for file in repaired_path.rglob("*"):

            if not file.is_file():
                continue

            if file.suffix not in {
                ".py",
                ".js",
                ".ts",
                ".tsx",
                ".jsx",
                ".json",
                ".env",
                ".txt",
            }:
                continue

            try:
                original = file.read_text(
                    encoding="utf-8",
                    errors="ignore",
                )
            except Exception:
                continue

            updated = original

            # Flask debug=True
            if "debug=True" in updated:
                updated = updated.replace("debug=True", "debug=False")

                applied.append(
                    {
                        "title": "Disabled Flask Debug Mode",
                        "file": str(file.relative_to(repaired_path)),
                    }
                )

            # shell=True
            if "shell=True" in updated:
                updated = updated.replace("shell=True", "shell=False")

                applied.append(
                    {
                        "title": "Disabled shell=True",
                        "file": str(file.relative_to(repaired_path)),
                    }
                )

            # Hardcoded secrets
            pattern = re.compile(
                r'([A-Z0-9_]*(KEY|TOKEN|SECRET|PASSWORD)[A-Z0-9_]*)\s*=\s*["\'][^"\']+["\']'
            )

            if pattern.search(updated):

                if "import os" not in updated:
                    updated = "import os\n" + updated

                updated = pattern.sub(
                    lambda m: f'{m.group(1)} = os.getenv("{m.group(1)}")',
                    updated,
                )

                applied.append(
                    {
                        "title": "Moved Hardcoded Secret",
                        "file": str(file.relative_to(repaired_path)),
                    }
                )

            if updated != original:
                file.write_text(updated, encoding="utf-8")

        zip_base = project_path.parent / f"{project_path.name}_secured"

        zip_file = shutil.make_archive(
            str(zip_base),
            "zip",
            repaired_path,
        )

        return {
            "success": True,
            "zip_path": zip_file,
            "applied_fixes": applied,
            "manual_review": manual,
            "total": len(applied),
        }