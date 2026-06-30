from typing import TypedDict

from fastapi import FastAPI

app = FastAPI(
    title="VibeSec API",
    description="Backend API for VibeSec",
    version="0.1.0",
)


class HealthResponse(TypedDict):
    status: str


@app.get("/health")
def health() -> HealthResponse:
    return {"status": "ok"}
