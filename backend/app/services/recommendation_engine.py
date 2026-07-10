from app.models.finding import Finding


def enrich_finding(finding: Finding) -> Finding:
    """
    Adds explanation, recommendation and secure code example
    based on the vulnerability category/title.
    """

    title = finding.title.lower()
    category = finding.category.lower()

    # --------------------------------------------------
    # SQL Injection
    # --------------------------------------------------
    if "sql" in title or "injection" in category:
        finding.explanation = (
            "SQL Injection occurs when untrusted user input is "
            "directly included in SQL queries, allowing attackers "
            "to manipulate the database."
        )

        finding.recommendation = (
            "Use parameterized queries or prepared statements instead "
            "of building SQL queries with string concatenation."
        )

        finding.secure_code = (
            'cursor.execute("SELECT * FROM users WHERE id = ?", (user_id,))'
        )

    # --------------------------------------------------
    # Cross Site Scripting
    # --------------------------------------------------
    elif "xss" in title or "cross-site scripting" in title:
        finding.explanation = (
            "Cross-Site Scripting (XSS) allows attackers to inject "
            "malicious JavaScript into web pages viewed by users."
        )

        finding.recommendation = (
            "Escape all untrusted output and sanitize user input. "
            "Avoid rendering raw HTML."
        )

        finding.secure_code = (
            "return render_template('page.html', value=escape(user_input))"
        )

    # --------------------------------------------------
    # Hardcoded Secrets
    # --------------------------------------------------
    elif "secret" in title or "credential" in title:
        finding.explanation = (
            "Secrets stored in source code may leak through version "
            "control or application deployments."
        )

        finding.recommendation = (
            "Store secrets in environment variables or a secure "
            "secret management service."
        )

        finding.secure_code = (
            'SECRET_KEY = os.getenv("SECRET_KEY")'
        )

    # --------------------------------------------------
    # File Upload
    # --------------------------------------------------
    elif "upload" in title:
        finding.explanation = (
            "Unrestricted file uploads may allow attackers to upload "
            "malicious files or overwrite existing files."
        )

        finding.recommendation = (
            "Validate file extensions, MIME types and generate "
            "server-side filenames."
        )

        finding.secure_code = (
            "filename = secure_filename(file.filename)"
        )

    # --------------------------------------------------
    # Path Traversal
    # --------------------------------------------------
    elif "path" in title or "traversal" in title:
        finding.explanation = (
            "Path Traversal vulnerabilities allow attackers to access "
            "files outside the intended directory."
        )

        finding.recommendation = (
            "Normalize paths and verify they remain inside the "
            "expected directory."
        )

        finding.secure_code = (
            "safe_path = (UPLOAD_DIR / filename).resolve()"
        )

    # --------------------------------------------------
    # Command Injection
    # --------------------------------------------------
    elif "command" in title:
        finding.explanation = (
            "Command Injection allows attackers to execute arbitrary "
            "system commands."
        )

        finding.recommendation = (
            "Never use shell=True with user input. "
            "Use subprocess arguments instead."
        )

        finding.secure_code = (
            'subprocess.run(["ping", host], check=True)'
        )

    # --------------------------------------------------
    # Weak Password Storage
    # --------------------------------------------------
    elif "password" in title:
        finding.explanation = (
            "Passwords must never be stored in plaintext."
        )

        finding.recommendation = (
            "Hash passwords using bcrypt or Argon2 before storage."
        )

        finding.secure_code = (
            "hashed = bcrypt.hashpw(password.encode(), bcrypt.gensalt())"
        )

    # --------------------------------------------------
    # Dependencies
    # --------------------------------------------------
    elif "dependency" in title:
        finding.explanation = (
            "Outdated dependencies may contain publicly known "
            "security vulnerabilities."
        )

        finding.recommendation = (
            "Upgrade to the latest secure version after verifying "
            "application compatibility."
        )

        finding.secure_code = (
            "pip install -U package_name"
        )

    # --------------------------------------------------
    # Default
    # --------------------------------------------------
    else:
        finding.explanation = (
            "This issue may negatively affect the security of the "
            "application."
        )

        finding.recommendation = (
            "Review the affected code and follow secure coding "
            "best practices."
        )

        finding.secure_code = ""

    return finding