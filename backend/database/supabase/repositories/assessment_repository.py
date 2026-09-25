from typing import Any

from ..supabase_client import supabase


class AssessmentRepository:

    def create_assessment(
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
            .table("assessments")
            .insert(payload)
            .execute()
        )

        return response.data[0] if response.data else None

    def get_user_assessments(
        self,
        user_id: str
    ) -> list[dict[str, Any]]:
        response = (
            supabase
            .table("assessments")
            .select("*")
            .eq("user_id", user_id)
            .execute()
        )

        return response.data