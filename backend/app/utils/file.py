import os
import shutil
from pathlib import Path


def create_directory(path: str):
    Path(path).mkdir(parents=True, exist_ok=True)


def delete_directory(path: str):
    if os.path.exists(path):
        shutil.rmtree(path)


def calculate_directory_size(path: str) -> int:
    total = 0

    for root, _, files in os.walk(path):
        for file in files:
            fp = os.path.join(root, file)
            total += os.path.getsize(fp)

    return total