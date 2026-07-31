from app.api.ai.base import AIProvider
from app.api.ai.groq_provider import GroqProvider


class ProviderFactory:
    @staticmethod
    def create(provider_name: str = "groq") -> AIProvider:
        provider_name = provider_name.lower()

        if provider_name == "groq":
            return GroqProvider()

        raise ValueError(f"Unsupported provider: {provider_name}")