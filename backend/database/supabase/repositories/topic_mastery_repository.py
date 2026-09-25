from typing import Any

from ..supabase_client import supabase


class TopicMasteryRepository:

    def create_topic_mastery(
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
            .table("topic_mastery")
            .insert(payload)
            .execute()
        )

        return response.data[0] if response.data else None

    def get_user_topic_mastery(
        self,
        user_id: str
    ) -> list[dict[str, Any]]:
        response = (
            supabase
            .table("topic_mastery")
            .select("*")
            .eq("user_id", user_id)
            .execute()
        )

        return response.data