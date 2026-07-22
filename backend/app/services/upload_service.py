from pathlib import Path
from uuid import uuid4

from fastapi import UploadFile

UPLOAD_DIR = Path("uploads/incoming")
UPLOAD_DIR.mkdir(parents=True, exist_ok=True)


async def save_uploaded_file(file: UploadFile) -> tuple[str, str]:
    """
    Save the uploaded ZIP file.

    Returns:
        (upload_id, saved_file_path)
    """

    upload_id = str(uuid4())
    destination = UPLOAD_DIR / f"{upload_id}.zip"

    with open(destination, "wb") as buffer:
        buffer.write(await file.read())

    return upload_id, str(destination)