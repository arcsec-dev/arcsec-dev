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

        return response.choices[0].message.content.strip()