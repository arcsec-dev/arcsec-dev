from app.models.finding import Finding


def enrich_finding(finding: Finding) -> Finding:
    """
    Adds category, explanation, recommendation and secure code example
    based on the vulnerability category, title and message.
    """

    title = finding.title.lower()
    message = finding.message.lower()
    category = finding.category.lower()

    # --------------------------------------------------
    # SQL Injection
    # --------------------------------------------------
    if (
        "sql" in title
        or "sql" in message
        or "sql injection" in category
    ):
        finding.category = "SQL Injection"

        finding.explanation = (
            "SQL Injection allows attackers to manipulate database "
            "queries by injecting malicious SQL through user input."
        )

        finding.recommendation = (
            "Use parameterized queries or prepared statements instead "
            "of concatenating user-controlled data into SQL statements."
        )

        finding.secure_code = (
            'cursor.execute("SELECT * FROM users WHERE id = ?", (user_id,))'
        )

    # --------------------------------------------------
    # Command Injection / shell=True
    # --------------------------------------------------
    elif (
        "shell-true" in title
        or "shell=true" in message
        or "command injection" in title
        or "command injection" in message
        or "subprocess" in message
    ):
        finding.category = "Command Injection"

        finding.explanation = (
            "Command Injection can allow attackers to execute arbitrary "
            "operating system commands when untrusted input is passed "
            "to a system shell."
        )

        finding.recommendation = (
            "Avoid shell=True and never pass unsanitized user input to "
            "system commands. Prefer subprocess calls with shell=False "
            "and a fixed argument list."
        )

        finding.secure_code = (
            'subprocess.run(["ping", host], check=True, shell=False)'
        )

    # --------------------------------------------------
    # eval()
    # --------------------------------------------------
    elif (
        "python-eval" in title
        or "eval()" in title
        or "eval(" in message
    ):
        finding.category = "Code Injection"

        finding.explanation = (
            "Using eval() on untrusted input can allow an attacker to "
            "execute arbitrary Python expressions and potentially take "
            "control of the application."
        )

        finding.recommendation = (
            "Do not use eval() with user-controlled input. Use explicit "
            "validation or a safe parser for the expected input format."
        )

        finding.secure_code = (
            "import ast\n"
            "result = ast.literal_eval(data)"
        )

    # --------------------------------------------------
    # exec()
    # --------------------------------------------------
    elif (
        "python-exec" in title
        or "exec()" in title
        or "exec(" in message
    ):
        finding.category = "Code Injection"

        finding.explanation = (
            "Using exec() with untrusted input allows attackers to execute "
            "arbitrary Python code within the application's process."
        )

        finding.recommendation = (
            "Avoid dynamic code execution with exec(). Replace it with "
            "explicit application logic or a controlled allowlist of "
            "supported operations."
        )

        finding.secure_code = (
            'allowed_operations = {"add": add, "remove": remove}\n'
            'operation = allowed_operations.get(user_input)\n'
            'if operation:\n'
            '    operation()'
        )

    # --------------------------------------------------
    # Pickle Deserialization
    # --------------------------------------------------
    elif (
        "pickle" in title
        or "pickle" in message
        or "deserialization" in category
    ):
        finding.category = "Insecure Deserialization"

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
    # Flask Debug Mode
    # --------------------------------------------------
    elif (
        "flask-debug" in title
        or "debug=True" in title
        or "debug=true" in message
    ):
        finding.category = "Security Misconfiguration"

        finding.explanation = (
            "Running a Flask application with debug mode enabled can "
            "expose sensitive debugging information and, in some "
            "configurations, an interactive debugger."
        )

        finding.recommendation = (
            "Disable Flask debug mode in production and run the "
            "application with debug=False."
        )

        finding.secure_code = (
            'app.run(host="127.0.0.1", port=5000, debug=False)'
        )

    # --------------------------------------------------
    # Cross Site Scripting
    # --------------------------------------------------
    elif (
        "xss" in title
        or "cross-site scripting" in title
        or "cross-site scripting" in message
    ):
        finding.category = "Cross-Site Scripting"

        finding.explanation = (
            "Cross-Site Scripting (XSS) allows attackers to inject "
            "malicious JavaScript into pages viewed by users."
        )

        finding.recommendation = (
            "Escape output and sanitize user input before rendering. "
            "Prefer framework-provided escaping mechanisms."
        )

        finding.secure_code = (
            "return render_template('page.html', value=escape(user_input))"
        )

    # --------------------------------------------------
    # Hardcoded Secrets
    # --------------------------------------------------
    elif "secret" in title or "credential" in title:
        finding.category = "Hardcoded Credentials"

        finding.explanation = (
            "Secrets stored in source code may be exposed through "
            "repositories, source distributions or deployments."
        )

        finding.recommendation = (
            "Store secrets in environment variables or a dedicated "
            "secret-management system instead of hardcoding them."
        )

        finding.secure_code = (
            'SECRET_KEY = os.getenv("SECRET_KEY")'
        )

    # --------------------------------------------------
    # File Upload
    # --------------------------------------------------
    elif "upload" in title:
        finding.category = "Unrestricted File Upload"

        finding.explanation = (
            "Unrestricted file uploads may allow attackers to upload "
            "malicious or unexpected files to the application."
        )

        finding.recommendation = (
            "Validate file type, extension and MIME type before saving "
            "uploads. Store uploaded files outside executable directories."
        )

        finding.secure_code = (
            "filename = secure_filename(file.filename)"
        )

    # --------------------------------------------------
    # Path Traversal
    # --------------------------------------------------
    elif "path" in title or "traversal" in title:
        finding.category = "Path Traversal"

        finding.explanation = (
            "Path Traversal vulnerabilities can allow attackers to access "
            "files outside the application's intended directory."
        )

        finding.recommendation = (
            "Normalize paths and verify that the resolved path remains "
            "inside the expected directory before accessing the file."
        )

        finding.secure_code = (
            "safe_path = (UPLOAD_DIR / filename).resolve()"
        )

    # --------------------------------------------------
    # Weak Password Storage
    # --------------------------------------------------
    elif (
        "password" in title
        or "password" in message
        or "md5" in title
    ):
        finding.category = "Weak Password Storage"

        finding.explanation = (
            "Weak password hashing algorithms such as MD5 can be "
            "cracked efficiently and should not be used for password storage."
        )

        finding.recommendation = (
            "Use a password hashing algorithm designed for password "
            "storage, such as Argon2, bcrypt or scrypt."
        )

        finding.secure_code = (
            'hashed = bcrypt.hashpw(password.encode(), bcrypt.gensalt())'
        )

    # --------------------------------------------------
    # Dependencies
    # --------------------------------------------------
    elif "dependency" in title or "dependency" in message:
        finding.category = "Vulnerable Dependency"

        finding.explanation = (
            "Outdated or vulnerable dependencies may contain publicly "
            "known security vulnerabilities."
        )

        finding.recommendation = (
            "Upgrade to a secure supported version after verifying "
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