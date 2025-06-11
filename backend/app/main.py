from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import ai, audio

app = FastAPI()

# Allow frontend (localhost:5173 or 3000 for Vite/React)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register API routers
app.include_router(ai.router, prefix="/api")
app.include_router(audio.router, prefix="/api")

@app.get("/")
def root():
    return {"message": "KAREN Personal AI Backend Running"}
