from fastapi import APIRouter, Request
from app.services.gemini_service import ask_gemini
from app.services.text_to_speech import synthesize_speech
from pydantic import BaseModel
from fastapi.responses import JSONResponse

router = APIRouter()

class PromptRequest(BaseModel):
    prompt: str

@router.post("/ask")
async def ask_ai(request: PromptRequest):
    # Get AI response from Gemini
    ai_reply = await ask_gemini(request.prompt)
    return {"reply": ai_reply}

@router.post("/speak")
async def speak(request: PromptRequest):
    # Synthesize speech from AI response
    audio_content = await synthesize_speech(request.prompt)
    return JSONResponse(content={"audio": audio_content})
