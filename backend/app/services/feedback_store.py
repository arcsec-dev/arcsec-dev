import sqlite3
from datetime import datetime, timezone
from pathlib import Path


class FeedbackStore:
    def __init__(self, db_path: Path):
        self.db_path = Path(db_path)
        self.db_path.parent.mkdir(parents=True, exist_ok=True)
        self._init_db()

    def _connect(self):
        return sqlite3.connect(self.db_path)

    def _init_db(self):
        with self._connect() as conn:
            conn.execute(
                """
                CREATE TABLE IF NOT EXISTS feedback (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    upload_id TEXT NOT NULL UNIQUE,
                    rating INTEGER NOT NULL CHECK(rating BETWEEN 1 AND 5),
                    review TEXT NOT NULL DEFAULT '',
                    submitted_at TEXT NOT NULL
                )
                """
            )
            conn.commit()

    def has_feedback(self, upload_id: str) -> bool:
        with self._connect() as conn:
            row = conn.execute(
                "SELECT 1 FROM feedback WHERE upload_id = ? LIMIT 1",
                (upload_id,),
            ).fetchone()
        return row is not None

    def save_feedback(self, upload_id: str, rating: int, review: str):
        submitted_at = datetime.now(timezone.utc).isoformat()
        with self._connect() as conn:
            try:
                cursor = conn.execute(
                    """
                    INSERT INTO feedback (upload_id, rating, review, submitted_at)
                    VALUES (?, ?, ?, ?)
                    """,
                    (upload_id, rating, review, submitted_at),
                )
                conn.commit()
            except sqlite3.IntegrityError:
                return None

            return {
                "id": cursor.lastrowid,
                "uploadId": upload_id,
                "rating": rating,
                "review": review,
                "submittedAt": submitted_at,
            }

    def list_feedback(self):
        with self._connect() as conn:
            rows = conn.execute(
                """
                SELECT id, upload_id, rating, review, submitted_at
                FROM feedback
                ORDER BY submitted_at DESC
                """
            ).fetchall()

        return [
            {
                "id": row[0],
                "uploadId": row[1],
                "rating": row[2],
                "review": row[3],
                "submittedAt": row[4],
            }
            for row in rows
        ]
