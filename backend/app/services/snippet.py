from pathlib import Path


def extract_snippet(
    project_path: Path,
    file_path: str,
    line_number: int,
    context: int = 3,
) -> str:
    """
    Extract a formatted code snippet around a vulnerability.

    Args:
        project_path: Root of the extracted project.
        file_path: Path returned by OpenGrep.
        line_number: Vulnerable line.
        context: Number of surrounding lines.

    Returns:
        Formatted snippet or an empty string.
    """

    try:
        file = Path(file_path)

        # If OpenGrep returned an absolute path, use it.
        if file.is_absolute():
            target = file

        else:
            # Otherwise resolve relative to the extracted project.
            target = project_path / file

            # Some OpenGrep versions return paths that already include
            # the extraction directory. If so, fall back to that.
            if not target.exists():
                target = Path(file_path)

        if not target.exists():
            return ""

        lines = target.read_text(
            encoding="utf-8",
            errors="ignore",
        ).splitlines()

        start = max(0, line_number - context - 1)
        end = min(len(lines), line_number + context)

        snippet = []

        for i in range(start, end):

            prefix = ">>" if (i + 1) == line_number else "  "

            snippet.append(
                f"{prefix} {i + 1:4} | {lines[i]}"
            )

        return "\n".join(snippet)

    except Exception:
        return ""