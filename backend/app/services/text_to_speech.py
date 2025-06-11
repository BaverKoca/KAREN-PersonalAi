import pyttsx3
import base64
from tempfile import NamedTemporaryFile

async def synthesize_speech(text: str) -> str:
    engine = pyttsx3.init()
    with NamedTemporaryFile(delete=True, suffix='.wav') as temp:
        engine.save_to_file(text, temp.name)
        engine.runAndWait()
        temp.seek(0)
        audio_bytes = temp.read()
    # Return base64-encoded audio for frontend playback
    return base64.b64encode(audio_bytes).decode('utf-8')
