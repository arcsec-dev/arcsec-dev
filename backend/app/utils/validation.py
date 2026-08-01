from pathlib import Path


def is_zip_file(filename: str) -> bool:
    return Path(filename).suffix.lower() == ".zip"


def sanitize_filename(filename: str) -> str:
    return filename.replace(" ", "_").replace("..", "")