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

    file: str
    line: int

    message: str
    source: str

    snippet: str = ""