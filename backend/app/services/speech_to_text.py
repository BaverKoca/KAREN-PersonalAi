import speech_recognition as sr
from tempfile import NamedTemporaryFile

async def transcribe_audio(file) -> str:
    recognizer = sr.Recognizer()
    with NamedTemporaryFile(delete=True, suffix='.wav') as temp:
        temp.write(await file.read())
        temp.flush()
        with sr.AudioFile(temp.name) as source:
            audio = recognizer.record(source)
        try:
            text = recognizer.recognize_google(audio)
        except Exception:
            text = "Could not transcribe audio."
    return text
