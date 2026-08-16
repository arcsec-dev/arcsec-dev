from pydantic import BaseModel
from app.models.finding import Finding


class AppliedFix(BaseModel):
    file: str
    issues: int


class ManualReview(BaseModel):
    file: str
    title: str


class RepairResult(BaseModel):
    success: bool
    total: int
    applied_fixes: list[AppliedFix]
    manual_review: list[ManualReview]
    findings_before: list[Finding]
    files_changed: list[str]
    findings_remaining: list[Finding]
    zero_change_packaging: bool
    verified: bool
