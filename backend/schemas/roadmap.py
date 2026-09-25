from pydantic import BaseModel


class RoadmapRequest(BaseModel):
    student_id: str
    topic_mastery: dict[str, float]