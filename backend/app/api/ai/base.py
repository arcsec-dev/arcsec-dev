from abc import ABC, abstractmethod


class AIProvider(ABC):
    """
    Base interface for all AI providers.
    """

    @abstractmethod
    def repair_code(self, prompt: str) -> str:
        """
        Accepts a repair prompt and returns the repaired source code.
        """
        pass