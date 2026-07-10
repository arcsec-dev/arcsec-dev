from pydantic import BaseModel


class Fix(BaseModel):
    id: str

    finding_id: str

    title: str

    description: str

    file: str

    line: int

    original_code: str

    replacement_code: str

    confidence: float

    approved: bool = False

    applied: bool = False