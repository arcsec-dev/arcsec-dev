from pathlib import Path
from uuid import uuid4

from app.models.finding import Finding
from app.models.fix import Fix
from app.models.repair_plan import RepairPlan


def generate_repair_plan(
    project_name: str,
    project_path: Path,
    findings: list[Finding],
) -> RepairPlan:

    fixes: list[Fix] = []

    for finding in findings:
        fixes.append(
            Fix(
                id=str(uuid4()),
                finding_id=finding.id,
                title=f"Fix {finding.title}",
                description="Repair strategy will be generated later.",
                file=finding.file,
                line=finding.line,
                original_code=finding.snippet,
                replacement_code="",
                confidence=0.0,
            )
        )

    return RepairPlan(
        project_name=project_name,
        fixes=fixes,
        total_fixes=len(fixes),
    )