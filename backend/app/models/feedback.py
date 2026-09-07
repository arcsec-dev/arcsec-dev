from datetime import datetime
from pydantic import BaseModel, Field


class FeedbackCreate(BaseModel):
    uploadId: str = Field(min_length=1)
    rating: int = Field(ge=1, le=5)
    review: str = Field(default="", max_length=500)


class FeedbackResponse(BaseModel):
    id: int
    uploadId: str
    rating: int
    review: str
    submittedAt: datetime
