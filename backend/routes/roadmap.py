from fastapi import APIRouter
from schemas.roadmap import RoadmapRequest
from services.roadmap_service import generate_roadmap

router = APIRouter(prefix="/roadmap", tags=["Roadmap"])


@router.post("/generate")
def create_roadmap(data: RoadmapRequest):
    return generate_roadmap(data.topic_mastery)