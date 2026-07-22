from zipfile import BadZipFile, ZipFile


def validate_zip(zip_path: str) -> bool:
    """
    Returns True if the file is a valid ZIP archive.
    Returns False otherwise.
    """
    try:
        with ZipFile(zip_path, "r") as archive:
            archive.testzip()
        return True

    except BadZipFile:
        return False

    except Exception:
        return False