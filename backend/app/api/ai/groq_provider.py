import os

from dotenv import load_dotenv
from groq import Groq

# Load variables from backend/.env
load_dotenv()

class GroqProvider:
    def __init__(self):
        api_key = os.getenv("GROQ_API_KEY")

        if not api_key:
            raise ValueError("GROQ_API_KEY environment variable not found.")

        self.client = Groq(api_key=api_key)
        self.model = "llama-3.3-70b-versatile"

    def repair_code(self, prompt: str) -> str:
        print("\n========== GROQ REPAIR PROMPT ==========")
        print(prompt)

        response = self.client.chat.completions.create(
            model=self.model,
            messages=[
                {
                    "role": "user",
                    "content": prompt,
                }
            ],
            temperature=0.2,
        )

        result = response.choices[0].message.content.strip()

        print("\n========== GROQ REPAIR RESPONSE ==========")
        print(result)
        print("\n========== END GROQ RESPONSE ==========\n")

        is_valid, violations = self.validate_repaired_code(result)

        if not is_valid:
            retry_prompt = f"""
        The code you just returned FAILED ArcSec's security validator.

        FORBIDDEN ITEMS DETECTED:
        {", ".join(violations)}

        You MUST repair the code again.

        ABSOLUTE REQUIREMENTS:
        - Remove every detected forbidden API completely.
        - Do not leave the forbidden API in executable code.
        - Do not put the forbidden API inside try/except.
        - Do not put the forbidden API inside an if/else branch.
        - Do not demonstrate the forbidden API.
        - Do not mention the forbidden API in executable Python.
        - Return the COMPLETE corrected Python source.
        - Return ONLY Python source code.
        - Do NOT use Markdown.
        - Do NOT use ``` fences.

        The previous code was:

        {result}

        Return the corrected source now.
        """

            response = self.client.chat.completions.create(
                model=self.model,
                messages=[
                    {
                        "role": "user",
                        "content": retry_prompt,
                    }
                ],
                temperature=0.0,
            )

            result = response.choices[0].message.content.strip()

            print("\n========== GROQ RETRY RESPONSE ==========")
            print(result)
            print("\n========== END GROQ RETRY RESPONSE ==========\n")

            is_valid, violations = self.validate_repaired_code(result)

        if not is_valid:
            print("\n========== REPAIR VALIDATION FAILED ==========")

            for violation in violations:
                print(f" - {violation}")

            print("=============================================\n")

            raise ValueError(
                "AI repair failed security validation: "
                + ", ".join(violations)
            )

        print("[SUCCESS] AI repair passed local security validation.")

        return result

    def validate_repaired_code(self, code: str) -> tuple[bool, list[str]]:
        import ast

        violations = []

        try:
            tree = ast.parse(code)
        except SyntaxError as exc:
            return False, [f"Invalid Python syntax: {exc}"]

        for node in ast.walk(tree):

            # Dangerous function calls
            if isinstance(node, ast.Call):
                if isinstance(node.func, ast.Name):
                    if node.func.id == "eval":
                        violations.append("eval()")

                    elif node.func.id == "exec":
                        violations.append("exec()")

                    elif node.func.id == "compile":
                        violations.append("compile()")

                elif isinstance(node.func, ast.Attribute):
                    if node.func.attr == "system":
                        violations.append("os.system()")

                    elif node.func.attr == "popen":
                        violations.append("os.popen()")

                    elif node.func.attr == "loads":
                        if isinstance(node.func.value, ast.Name):
                            if node.func.value.id == "pickle":
                                violations.append("pickle.loads()")

                    elif node.func.attr == "load":
                        if isinstance(node.func.value, ast.Name):
                            if node.func.value.id == "pickle":
                                violations.append("pickle.load()")

                    elif node.func.attr == "md5":
                        if isinstance(node.func.value, ast.Name):
                            if node.func.value.id == "hashlib":
                                violations.append("MD5")

                    elif node.func.attr == "sha1":
                        if isinstance(node.func.value, ast.Name):
                            if node.func.value.id == "hashlib":
                                violations.append("SHA-1")

            # Keyword arguments such as shell=True, verify=False, debug=True
            if isinstance(node, ast.keyword):

                if node.arg == "shell":
                    if isinstance(node.value, ast.Constant):
                        if node.value.value is True:
                            violations.append("subprocess shell=True")

                elif node.arg == "verify":
                    if isinstance(node.value, ast.Constant):
                        if node.value.value is False:
                            violations.append("TLS verification disabled")

                elif node.arg == "debug":
                    if isinstance(node.value, ast.Constant):
                        if node.value.value is True:
                            violations.append("Flask debug mode")

        # Remove duplicate findings while preserving order.
        violations = list(dict.fromkeys(violations))

        return len(violations) == 0, violations