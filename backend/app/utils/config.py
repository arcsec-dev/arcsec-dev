import os
from pathlib import Path
from dotenv import load_dotenv

load_dotenv()

# Base directory
BASE_DIR = Path(__file__).resolve().parent.parent.parent

# Environment
DEBUG = os.getenv("DEBUG", "True").lower() == "true"

# API Keys
GROQ_API_KEY = os.getenv("GROQ_API_KEY", "")

# Directories
UPLOAD_DIRECTORY = os.getenv(
    "UPLOAD_DIRECTORY",
    str(BASE_DIR / "uploads")
)

TEMP_DIRECTORY = os.getenv(
    "TEMP_DIRECTORY",
    str(BASE_DIR / "temp")
)

REPORT_DIRECTORY = os.getenv(
    "REPORT_DIRECTORY",
    str(BASE_DIR / "reports")
)

# Limits
MAX_UPLOAD_SIZE = int(
    os.getenv("MAX_UPLOAD_SIZE", 100 * 1024 * 1024)
)