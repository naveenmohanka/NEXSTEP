from fastapi import FastAPI, Depends
from routes.assessment import router as assessment_router
from routes.roadmap import router as roadmap_router
from auth import get_access_token

app = FastAPI()

app.include_router(assessment_router)
app.include_router(roadmap_router)


@app.get("/")
def home():
    return {"message": "AI Learning Navigator Backend Running"}


@app.get("/auth/test")
def auth_test(token: str = Depends(get_access_token)):
    return {
        "authenticated": True,
        "token_received": bool(token)
    }