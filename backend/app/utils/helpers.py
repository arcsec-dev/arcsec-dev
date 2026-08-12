import uuid


def generate_upload_id() -> str:
    """Generate a unique upload ID."""
    return str(uuid.uuid4())


def format_bytes(size: int) -> str:
    """Convert bytes into a human-readable string."""
    power = 1024
    units = ["B", "KB", "MB", "GB", "TB"]

    n = 0
    while size >= power and n < len(units) - 1:
        size /= power
        n += 1

    return f"{size:.2f} {units[n]}"