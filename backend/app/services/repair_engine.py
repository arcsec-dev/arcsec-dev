from pathlib import Path
import shutil


from app.services.repair_services import RepairService


class RepairEngine:
    """
    AI-powered repair engine.

    Responsibilities:
    - Create a working copy of the uploaded project.
    - Invoke the AI repair service.
    - Generate a repaired ZIP archive.
    - Return repair metadata.
    """

    def __init__(self, provider_name: str = "groq"):
        self.repair_service = RepairService(provider_name)

    def repair_project(
        self,
        project_path: Path,
        findings: list[dict],
    ) -> dict:

        try:
            project_path = Path(project_path).resolve()

            if not project_path.exists():
                return {
                    "success": False,
                    "error": f"Project not found: {project_path}",
                }

            repaired_path = project_path.parent / f"{project_path.name}_repaired"

            # Remove any previous repaired copy
            if repaired_path.exists():
                shutil.rmtree(repaired_path)

            # Create working copy
            shutil.copytree(project_path, repaired_path)

            # Repair project
            self.repair_service.repair_project(
                project_root=str(repaired_path),
                findings=findings,
            )

            # Create ZIP
            zip_base = project_path.parent / f"{project_path.name}_secured"

            zip_file = shutil.make_archive(
                str(zip_base),
                "zip",
                repaired_path,
            )

            grouped = self.repair_service.group_findings_by_file(findings)

            repaired_files = []

            for file_name, file_findings in grouped.items():
                repaired_files.append(
                    {
                        "file": file_name,
                        "issues": len(file_findings),
                    }
                )

            return {
                "success": True,
                "zip_path": zip_file,
                "project_path": str(repaired_path),
                "applied_fixes": repaired_files,
                "manual_review": [],
                "total": len(findings),
            }

        except Exception as e:
            return {
                "success": False,
                "error": str(e),
            }