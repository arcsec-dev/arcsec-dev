from typing import Literal

from pydantic import BaseModel


class Finding(BaseModel):
    title: str

    severity: Literal[
        "CRITICAL",
        "HIGH",
        "MEDIUM",
        "LOW",
        "INFO",
        "WARNING",
        "ERROR",
        "UNKNOWN",
    ]

    category: str = "Other"

    file: str

    line: int

    message: str

    source: str

    snippet: str = ""

    explanation: str = ""

    recommendation: str = ""

    secure_code: str = ""