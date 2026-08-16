from app.models.finding import Finding

CATEGORY_RULES = {
    "Injection": [
        "sql",
        "xss",
        "command",
        "deserialization",
        "template",
    ],
    "Authentication": [
        "authentication",
        "password",
        "login",
        "session",
    ],
    "Authorization": [
        "authorization",
        "idor",
        "access",
        "permission",
    ],
    "Secrets": [
        "secret",
        "token",
        "apikey",
        "key",
        "credential",
    ],
    "Configuration": [
        "cors",
        "debug",
        "directory",
        "config",
    ],
    "Dependencies": [
        "dependency",
        "flask",
        "jinja",
        "requests",
        "werkzeug",
        "pyyaml",
    ],
    "File Handling": [
        "upload",
        "path",
        "traversal",
        "file",
    ],
    "Information Disclosure": [
        "traceback",
        "information",
        "error",
    ],
}


def categorize_finding(finding: Finding) -> Finding:
    """
    Assign a security category to a finding.
    """

    text = (
        f"{finding.title} {finding.message}"
    ).lower()

    for category, keywords in CATEGORY_RULES.items():

        if any(keyword in text for keyword in keywords):
            finding.category = category
            return finding

    finding.category = "Other"

    return finding