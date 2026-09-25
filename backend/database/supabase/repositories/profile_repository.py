from typing import Any

from ..supabase_client import supabase


class ProfileRepository:

    def get_profile(self, user_id: str) -> dict[str, Any] | None:
        response = (
            supabase
            .table("profiles")
            .select("*")
            .eq("id", user_id)
            .maybe_single()
            .execute()
        )

        return response.data

    def update_profile(
        self,
        user_id: str,
        data: dict[str, Any]
    ) -> dict[str, Any] | None:
        response = (
            supabase
            .table("profiles")
            .update(data)
            .eq("id", user_id)
            .execute()
        )

        return response.data[0] if response.data else None