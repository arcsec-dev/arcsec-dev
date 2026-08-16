# ArcSec Integrated Test Build

This build combines:
- Main/frontend-dev project as the base
- Belcita OpenGrep scanner, rules, and OpenGrep report metadata
- Frontend-dev dashboard/report UI and advanced repair verification
- Main-only detector/upload_service/zip_utils retained where not conflicting

## Scanner
OpenGrep replaces Semgrep. Install the `opengrep` executable separately and ensure it is on PATH.

## Backend
Run from `backend` with the virtual environment active:
`uvicorn app.main:app --reload`

## Frontend
Run from `frontend`:
`npm run dev`

Do not copy `.env` files or API keys into this archive.
