from fastapi import APIRouter
from schemas.assessment import AssessmentRequest
from services.assessment_service import evaluate_assessment

router = APIRouter(prefix="/assessment", tags=["Assessment"])


@router.post("/submit")
def submit_assessment(data: AssessmentRequest):
    return evaluate_assessment(data.answers)