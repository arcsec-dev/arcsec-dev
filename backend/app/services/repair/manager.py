from pathlib import Path

from app.models.finding import Finding
from app.models.repair_plan import RepairPlan
from app.services.repair.planner import generate_repair_plan


class RepairManager:
    def create_plan(
        self,
        project_name: str,
        project_path: Path,
        findings: list[Finding],
    ) -> RepairPlan:
        return generate_repair_plan(
            project_name=project_name,
            project_path=project_path,
            findings=findings,
        )