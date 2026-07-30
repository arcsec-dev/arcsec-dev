from datetime import datetime, UTC
from typing import Any

from app.models.finding import Finding
from app.models.report import (
    ProjectSummary,
    ReportMetadata,
    ScanReport,
    ScanStatistics,
)


def calculate_statistics(findings: list[Finding]) -> ScanStatistics:
    stats = ScanStatistics()

    for finding in findings:
        severity = finding.severity.upper()

        if severity == "CRITICAL":
            stats.critical += 1
        elif severity == "HIGH":
            stats.high += 1
        elif severity == "MEDIUM":
            stats.medium += 1
        elif severity == "LOW":
            stats.low += 1
        else:
            stats.info += 1

    stats.total = len(findings)

    return stats


def calculate_security_score(stats: ScanStatistics) -> int:
    penalty = (
        stats.critical * 20
        + stats.high * 10
        + stats.medium * 5
        + stats.low * 2
        + stats.info
    )

    return max(0, 100 - penalty)


def calculate_overall_risk(score: int) -> str:
    if score >= 91:
        return "SAFE"

    if score >= 71:
        return "LOW"

    if score >= 41:
        return "MEDIUM"

    if score >= 21:
        return "HIGH"

    return "CRITICAL"


def build_scan_report(
    *,
    status: str,
    upload_id: str,
    project_info: dict[str, Any],
    findings: list[Finding],
) -> ScanReport:

    statistics = calculate_statistics(findings)

    security_score = calculate_security_score(statistics)

    overall_risk = calculate_overall_risk(security_score)

    project = ProjectSummary(
        projectName=project_info["projectName"],
        language=project_info["language"],
        framework=project_info["framework"],
        files=project_info["files"],
        directories=project_info["directories"],
    )

    metadata = ReportMetadata(
        generatedAt=datetime.now(UTC).strftime("%Y-%m-%d %H:%M:%S UTC"),
        scanners=[
            "Semgrep",
            "Dependency Scanner",
            "VibeSec Analyzer",
        ],
        reportVersion="MVP 0.1",
    )

    return ScanReport(
        status=status,
        uploadId=upload_id,
        project=project,
        statistics=statistics,
        securityScore=security_score,
        overallRisk=overall_risk,
        metadata=metadata,
        findings=findings,
    )