from pathlib import Path
from typing import TypedDict
from app.services.extractor import extract_zip
from app.services.detector import detect_project_type

from fastapi import FastAPI, File, HTTPException, UploadFile

from app.services.upload_service import save_uploaded_file
from app.utils.zip_utils import validate_zip

app = FastAPI(
    title="VibeSec API",
    description="Backend API for VibeSec",
    version="0.1.0",
)

# Folder where uploaded ZIP files will be stored
UPLOAD_DIR = Path("uploads/incoming")
UPLOAD_DIR.mkdir(parents=True, exist_ok=True)


class HealthResponse(TypedDict):
    status: str


class UploadResponse(TypedDict):
    status: str
    uploadId: str
    originalFilename: str
    projectType: str


@app.get("/health")
def health() -> HealthResponse:
    return {"status": "ok"}


@app.post("/upload")
async def upload(file: UploadFile = File(...)) -> UploadResponse:
    # Validate file extension
    if not file.filename.endswith(".zip"):
        raise HTTPException(
            status_code=400,
            detail="Only ZIP files are allowed.",
        )

    # Save uploaded file
    upload_id, saved_path = await save_uploaded_file(file)

    # Validate that the uploaded file is a real ZIP archive
    if not validate_zip(saved_path):
        raise HTTPException(
            status_code=400,
            detail="Uploaded file is not a valid ZIP archive.",
        )
    # Extract the ZIP
    extracted_path = extract_zip(saved_path, upload_id)
    project_type = detect_project_type(extracted_path)

    return {
        "status": "success",
        "uploadId": upload_id,
        "originalFilename": file.filename,
        "projectType": project_type,
    }