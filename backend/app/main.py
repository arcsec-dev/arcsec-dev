from pathlib import Path
from typing import TypedDict
from uuid import uuid4

from fastapi import FastAPI, File, HTTPException, UploadFile

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

    # Generate a unique filename
    upload_id = str(uuid4())
    destination = UPLOAD_DIR / f"{upload_id}.zip"

    # Save uploaded file
    with open(destination, "wb") as buffer:
        buffer.write(await file.read())

    return {
        "status": "success",
        "uploadId": upload_id,
        "originalFilename": file.filename,
    }