from typing import Any

from ..supabase_client import supabase


class PracticeAttemptsRepository:

    def create_attempt(
        self,
        user_id: str,
        data: dict[str, Any]
    ) -> dict[str, Any] | None:
        payload = {
            "user_id": user_id,
            **data,
        }

        response = (
            supabase
            .table("practice_attempts")
            .insert(payload)
            .execute()
        )

        return response.data[0] if response.data else None

    def get_user_attempts(
        self,
        user_id: str
    ) -> list[dict[str, Any]]:
        response = (
            supabase
            .table("practice_attempts")
            .select("*")
            .eq("user_id", user_id)
            .execute()
        )

        return response.data