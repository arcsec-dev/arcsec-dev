from pathlib import Path

from app.api.ai.provider_factory import ProviderFactory
from app.services.prompt_builder import PromptBuilder


class RepairService:
    """
    Repairs vulnerable source files using the configured AI provider.
    """

    def __init__(self, provider_name: str = "groq"):
        self.provider = ProviderFactory.create(provider_name)

    def group_findings_by_file(
        self,
        findings: list[dict],
    ) -> dict[str, list[dict]]:
        """
        Groups findings by the file they belong to.
        """

        grouped: dict[str, list[dict]] = {}

        for finding in findings:
            file_path = finding.get("file")

            if not file_path:
                continue

            grouped.setdefault(file_path, []).append(finding)

        return grouped

    def repair_project(
        self,
        project_root: str,
        findings: list[dict],
    ) -> list[str]:
        """
        Repairs every vulnerable file inside the project.
        Returns a list of successfully modified file paths.
        """

        print("\n========== REPAIR SERVICE ==========")

        project_root = Path(project_root).resolve()
        print(f"Project Root : {project_root}")

        grouped = self.group_findings_by_file(findings)
        print(f"Files to repair : {len(grouped)}")

        repaired_paths: list[str] = []

        for relative_path, file_findings in grouped.items():

            print("\n----------------------------------------")
            print(f"Processing : {relative_path}")

            file_path = Path(relative_path)

            if not file_path.is_absolute():
                file_path = project_root / file_path

            file_path = file_path.resolve()

            if not file_path.exists():
                print(f"[WARNING] File not found: {file_path}")
                continue

            try:
                source_code = file_path.read_text(
                    encoding="utf-8",
                    errors="replace",
                )

                prompt = PromptBuilder.build_prompt(
                    file_path=str(file_path),
                    source_code=source_code,
                    findings=file_findings,
                )

                repaired_code = self.provider.repair_code(prompt)

                if repaired_code and repaired_code.strip() and repaired_code.strip() != source_code.strip():

                    file_path.write_text(
                        repaired_code,
                        encoding="utf-8",
                    )

                    repaired_paths.append(relative_path)
                    print(f"[SUCCESS] Repaired: {file_path}")

                else:
                    print(
                        f"[INFO] No modifications applied to {file_path}"
                    )

            except Exception as e:
                print(f"[ERROR] Failed to repair {file_path}")
                print(e)
                raise e

        print("\n========== REPAIR COMPLETE ==========\n")
        return repaired_paths