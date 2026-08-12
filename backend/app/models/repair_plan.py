from pydantic import BaseModel

from app.models.fix import Fix


class RepairPlan(BaseModel):
    project_name: str

    fixes: list[Fix]

    total_fixes: int

    approved_fixes: int = 0

    applied_fixes: int = 0