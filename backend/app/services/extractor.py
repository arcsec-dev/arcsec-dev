from pathlib import Path
from zipfile import ZipFile


EXTRACT_DIR = Path("uploads/extracted")
EXTRACT_DIR.mkdir(parents=True, exist_ok=True)


def extract_zip(zip_path: str, upload_id: str) -> str:
    """
    Extracts a ZIP archive into its own folder.

    Returns:
        Path to the extracted project.
    """

    destination = EXTRACT_DIR / upload_id
    destination.mkdir(parents=True, exist_ok=True)

    with ZipFile(zip_path, "r") as archive:
        archive.extractall(destination)

    return str(destination)