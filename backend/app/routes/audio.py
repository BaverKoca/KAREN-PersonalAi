from fastapi import APIRouter, UploadFile, File
from app.services.speech_to_text import transcribe_audio
from fastapi.responses import JSONResponse

router = APIRouter()

@router.post("/transcribe")
async def transcribe(file: UploadFile = File(...)):
    # Transcribe uploaded audio file
    text = await transcribe_audio(file)
    return JSONResponse(content={"text": text})
