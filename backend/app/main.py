import zipfile
from pathlib import Path
try:
    from typing_extensions import TypedDict
except ImportError:
    from typing import TypedDict
from uuid import uuid4

from fastapi import FastAPI, File, HTTPException, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from pydantic import BaseModel

from app.models.finding import Finding
from app.models.report import ScanReport
from app.models.repair_result import RepairResult, AppliedFix, ManualReview
from app.services.analyzer import analyze_project
from app.services.categorizer import categorize_finding
from app.services.dependency_scanner import scan_dependencies
from app.services.recommendation_engine import enrich_finding
from app.services.report_builder import build_scan_report
from app.services.repair_engine import RepairEngine
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

# --------------------------------------------------
# Active Uploads (MVP)
# --------------------------------------------------

ACTIVE_PROJECTS: dict[str, Path] = {}
ACTIVE_FINDINGS: dict[str, list[Finding]] = {}
ACTIVE_REPAIRS: dict[str, Path] = {}


class HealthResponse(TypedDict):
    status: str


class RepairRequest(BaseModel):
    uploadId: str


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

    ACTIVE_PROJECTS[upload_id] = extract_path

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

    ACTIVE_FINDINGS[upload_id] = findings

    return report


@app.post("/repair", response_model=RepairResult)
async def repair(request: RepairRequest) -> RepairResult:
    project_path = ACTIVE_PROJECTS.get(request.uploadId)
    findings = ACTIVE_FINDINGS.get(request.uploadId)

    if project_path is None:
        raise HTTPException(
            status_code=404,
            detail="Project not found.",
        )

    if findings is None:
        raise HTTPException(
            status_code=404,
            detail="Findings not found.",
        )

    try:
        engine = RepairEngine()
    except ValueError as e:
        raise HTTPException(
            status_code=400,
            detail=f"Groq API key is missing. Please check the backend .env configuration: {str(e)}",
        )
    except Exception as e:
        raise HTTPException(
            status_code=400,
            detail=f"Failed to initialize repair engine: {str(e)}",
        )

    result = engine.repair_project(
        project_path=project_path,
        findings=[finding.model_dump() for finding in findings],
    )

    if not result.get("success"):
        err_msg = result.get("error", "")
        if "AuthenticationError" in err_msg or "401" in err_msg or "API key" in err_msg.lower() or "unauthorized" in err_msg.lower():
            detail_msg = "Groq API key is invalid or unauthorized. Please check your GROQ_API_KEY in backend/.env."
        elif "rate_limit_exceeded" in err_msg or "429" in err_msg:
            detail_msg = "Groq API rate limit exceeded. Please try again later."
        else:
            detail_msg = f"Repair failed: {err_msg}"
            
        raise HTTPException(
            status_code=400,
            detail=detail_msg,
        )

    repaired_path = Path(result["project_path"])
    ACTIVE_REPAIRS[request.uploadId] = Path(result["zip_path"])

    # --------------------------------------------------
    # Post-Repair Scan & Verification
    # --------------------------------------------------
    try:
        post_semgrep_findings = run_security_scan(repaired_path)
        post_dependency_findings = scan_dependencies(repaired_path)

        post_raw_findings = post_semgrep_findings + post_dependency_findings

        post_findings = [
            enrich_finding(
                categorize_finding(finding)
            )
            for finding in post_raw_findings
        ]
    except Exception as scan_err:
        post_findings = [
            Finding(
                title="Post-Repair Scanner Error",
                severity="ERROR",
                category="System",
                file="",
                line=0,
                message=str(scan_err),
                source="ArcSec",
                snippet="",
                explanation="",
                recommendation="Verify post-repair scan setup.",
                secure_code="",
            )
        ]

    # Calculate files changed
    applied_fixes_list = [
        AppliedFix(file=fix["file"], issues=fix["issues"])
        for fix in result.get("applied_fixes", [])
    ]
    files_changed = [fix.file for fix in applied_fixes_list]

    # Calculate manual reviews based on remaining findings
    # Filter out findings with severity "ERROR" (e.g. scanner errors) from the core verification
    remaining_non_error_findings = [f for f in post_findings if f.severity != "ERROR"]
    
    manual_reviews = [
        ManualReview(file=f.file, title=f.title)
        for f in remaining_non_error_findings
    ]

    # Verification: verified only if post-repair non-error findings are 0
    # and we actually had findings to repair (or post-scan confirms all original non-error findings are fixed)
    original_non_error_findings = [f for f in findings if f.severity != "ERROR"]
    
    # If the original scan had vulnerabilities, and the post-repair scan has none, it's verified clean
    verified = len(remaining_non_error_findings) == 0 and len(original_non_error_findings) > 0

    return RepairResult(
        success=True,
        total=result.get("total", 0),
        applied_fixes=applied_fixes_list,
        manual_review=manual_reviews,
        findings_before=findings,
        files_changed=files_changed,
        findings_remaining=post_findings,
        zero_change_packaging=len(files_changed) == 0,
        verified=verified,
    )


@app.get("/download/{upload_id}")
async def download(upload_id: str):
    zip_path = ACTIVE_REPAIRS.get(upload_id)

    if zip_path is None or not zip_path.exists():
        raise HTTPException(
            status_code=404,
            detail="Secure project not found.",
        )

    return FileResponse(
        path=zip_path,
        filename="secured-project.zip",
        media_type="application/zip",
    )