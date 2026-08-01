from app.models.finding import Finding


def enrich_finding(finding: Finding) -> Finding:
    """
    Adds explanation, recommendation and secure code example
    based on the vulnerability category/title.
    """

    title = finding.title.lower()
    message = finding.message.lower()
    category = finding.category.lower()

    # --------------------------------------------------
    # SQL Injection
    # --------------------------------------------------
    if "sql" in title or "sql" in message:

        finding.explanation = (
            "SQL Injection allows attackers to manipulate database "
            "queries by injecting malicious SQL through user input."
        )

        finding.recommendation = (
            "Use parameterized queries or prepared statements instead "
            "of concatenating SQL strings."
        )

        finding.secure_code = (
            'cursor.execute("SELECT * FROM users WHERE id = ?", (user_id,))'
        )

    # --------------------------------------------------
    # Pickle Deserialization
    # --------------------------------------------------
    elif "pickle" in title or "pickle" in message:

        finding.explanation = (
            "Deserializing untrusted pickle data can execute arbitrary "
            "Python code and completely compromise the application."
        )

        finding.recommendation = (
            "Avoid using pickle with untrusted input. Prefer JSON or "
            "another safe serialization format."
        )

        finding.secure_code = (
            "data = json.loads(user_input)"
        )

    # --------------------------------------------------
    # Cross Site Scripting
    # --------------------------------------------------
    elif "xss" in title or "cross-site scripting" in title:

        finding.explanation = (
            "Cross-Site Scripting (XSS) allows attackers to inject "
            "malicious JavaScript into pages viewed by users."
        )

        finding.recommendation = (
            "Escape output and sanitize user input before rendering."
        )

        finding.secure_code = (
            "return render_template('page.html', value=escape(user_input))"
        )

    # --------------------------------------------------
    # Hardcoded Secrets
    # --------------------------------------------------
    elif "secret" in title or "credential" in title:

        finding.explanation = (
            "Secrets stored in source code may be exposed through "
            "repositories or deployments."
        )

        finding.recommendation = (
            "Store secrets in environment variables or a secret manager."
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
            "malicious files."
        )

        finding.recommendation = (
            "Validate file type, extension and MIME type before saving."
        )

        finding.secure_code = (
            "filename = secure_filename(file.filename)"
        )

    # --------------------------------------------------
    # Path Traversal
    # --------------------------------------------------
    elif "path" in title or "traversal" in title:

        finding.explanation = (
            "Path Traversal vulnerabilities allow access to files "
            "outside the intended directory."
        )

        finding.recommendation = (
            "Normalize paths and verify they remain within the "
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
            "Avoid shell=True and never pass unsanitized user input "
            "to system commands."
        )

        finding.secure_code = (
            'subprocess.run(["ping", host], check=True)'
        )

    # --------------------------------------------------
    # Weak Password Storage
    # --------------------------------------------------
    elif "password" in title:

        finding.explanation = (
            "Passwords should never be stored in plaintext."
        )

        finding.recommendation = (
            "Hash passwords using bcrypt or Argon2."
        )

        finding.secure_code = (
            "hashed = bcrypt.hashpw(password.encode(), bcrypt.gensalt())"
        )

    # --------------------------------------------------
    # Dependencies
    # --------------------------------------------------
    elif "dependency" in title:

        finding.explanation = (
            "Outdated dependencies may contain publicly known security "
            "vulnerabilities."
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
            "This issue may negatively affect the security of the application."
        )

        finding.recommendation = (
            "Review the affected code and follow secure coding best practices."
        )

        finding.secure_code = ""

    return finding