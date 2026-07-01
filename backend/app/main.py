import zipfile
from pathlib import Path
from typing import Any, TypedDict
from uuid import uuid4

from fastapi import FastAPI, File, HTTPException, UploadFile

from app.services.analyzer import analyze_project
from app.services.scanner import run_security_scan

app = FastAPI(
    title="VibeSec API",
    description="Backend API for VibeSec",
    version="0.1.0",
)

UPLOAD_DIR = Path("uploads/incoming")
TEMP_DIR = Path("temp")

UPLOAD_DIR.mkdir(parents=True, exist_ok=True)
TEMP_DIR.mkdir(parents=True, exist_ok=True)


class HealthResponse(TypedDict):
    status: str


class UploadResponse(TypedDict):
    status: str
    uploadId: str
    originalFilename: str
    project: dict[str, Any]
    findings: list[dict[str, Any]]


@app.get("/health")
def health() -> HealthResponse:
    return {"status": "ok"}


@app.post("/upload")
async def upload(file: UploadFile = File(...)) -> UploadResponse:
    # --------------------------------------------------
    # Validate Upload
    # --------------------------------------------------
    if not file.filename.lower().endswith(".zip"):
        raise HTTPException(
            status_code=400,
            detail="Only ZIP files are allowed."
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
    # Security Scan
    # --------------------------------------------------
    try:
        findings = run_security_scan(extract_path)
    except RuntimeError as e:
        findings = [
            {
                "title": "Scanner Error",
                "severity": "ERROR",
                "file": "",
                "line": 0,
                "message": str(e),
            }
        ]

    # --------------------------------------------------
    # Response
    # --------------------------------------------------
    return {
        "status": "success",
        "uploadId": upload_id,
        "originalFilename": file.filename,
        "project": project_info,
        "findings": findings,
    }