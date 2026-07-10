import zipfile
from pathlib import Path
from typing import TypedDict
from uuid import uuid4

from fastapi import FastAPI, File, HTTPException, UploadFile
from fastapi.middleware.cors import CORSMiddleware

from app.models.finding import Finding
from app.models.report import ScanReport
from app.services.analyzer import analyze_project
from app.services.categorizer import categorize_finding
from app.services.dependency_scanner import scan_dependencies
from app.services.recommendation_engine import enrich_finding
from app.services.report_builder import build_scan_report
from app.services.scanner import run_security_scan
from app.services.report_builder import build_scan_report
from app.services.scanner import run_security_scan

app = FastAPI(
    title="VibeSec API",
    description="Backend API for VibeSec",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_DIR = Path("uploads/incoming")
TEMP_DIR = Path("temp")

UPLOAD_DIR.mkdir(parents=True, exist_ok=True)
TEMP_DIR.mkdir(parents=True, exist_ok=True)


class HealthResponse(TypedDict):
    status: str


@app.get("/health")
def health() -> HealthResponse:
    return {"status": "ok"}


@app.post("/upload", response_model=ScanReport)
async def upload(file: UploadFile = File(...)) -> ScanReport:
    # --------------------------------------------------
    # Validate Upload
    # --------------------------------------------------
    if not file.filename.lower().endswith(".zip"):
        raise HTTPException(
            status_code=400,
            detail="Only ZIP files are allowed.",
        )

    # --------------------------------------------------
    # Generate Upload ID
    # --------------------------------------------------
    upload_id = str(uuid4())

    # --------------------------------------------------
    # Save ZIP
    # --------------------------------------------------
    zip_path = UPLOAD_DIR / f"{upload_id}.zip"

    with open(zip_path, "wb") as buffer:
        buffer.write(await file.read())

    # --------------------------------------------------
    # Extract Project
    # --------------------------------------------------
    extract_path = TEMP_DIR / upload_id
    extract_path.mkdir(parents=True, exist_ok=True)

    with zipfile.ZipFile(zip_path, "r") as zip_ref:
        zip_ref.extractall(extract_path)

    # --------------------------------------------------
    # Analyze Project
    # --------------------------------------------------
    project_name = Path(file.filename).stem

    project_info = analyze_project(
        extract_path,
        project_name,
    )

    # --------------------------------------------------
    # Run Security Scanners
    # --------------------------------------------------
    try:
        semgrep_findings = run_security_scan(extract_path)
        dependency_findings = scan_dependencies(extract_path)

        raw_findings = semgrep_findings + dependency_findings

        findings = [
            enrich_finding(
                categorize_finding(finding)
            )
            for finding in raw_findings
        ]
    except RuntimeError as e:
        findings = [
            Finding(
                title="Scanner Error",
                severity="ERROR",
                category="System",
                file="",
                line=0,
                message=str(e),
                source="VibeSec",
                snippet="",
                explanation="",
                recommendation="Verify the scanner installation and configuration.",
                secure_code="",
            )
        ]

    # --------------------------------------------------
    # Build Professional Report
    # --------------------------------------------------
    report = build_scan_report(
        status="success",
        upload_id=upload_id,
        project_info=project_info,
        findings=findings,
    )

    return report