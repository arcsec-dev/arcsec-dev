from pydantic import BaseModel

from app.models.finding import Finding


class ProjectSummary(BaseModel):
    projectName: str
    language: list[str]
    framework: str
    files: int
    directories: int


class ScanStatistics(BaseModel):
    critical: int = 0
    high: int = 0
    medium: int = 0
    low: int = 0
    info: int = 0
    total: int = 0


class ReportMetadata(BaseModel):
    generatedAt: str
    scanners: list[str]
    reportVersion: str


class ScanReport(BaseModel):
    status: str

    uploadId: str

    project: ProjectSummary

    statistics: ScanStatistics

    securityScore: int

    overallRisk: str

    metadata: ReportMetadata

    findings: list[Finding]