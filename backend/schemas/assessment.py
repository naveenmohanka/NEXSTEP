from pydantic import BaseModel


class AssessmentAnswer(BaseModel):
    question_id: int
    answer: str
    time_taken: int


class AssessmentRequest(BaseModel):
    student_id: str
    answers: list[AssessmentAnswer]