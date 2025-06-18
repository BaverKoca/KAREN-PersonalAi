import os
from dotenv import load_dotenv

load_dotenv()

# Gemini (Google Generative AI) integration
async def ask_gemini(prompt: str) -> str:
    import google.generativeai as genai
    api_key = os.getenv("GEMINI_API_KEY")
    if not api_key:
        return "GEMINI_API_KEY not set in .env file."
    try:
        genai.configure(api_key=api_key)
        model = genai.GenerativeModel("gemini-pro")
        response = await model.generate_content_async(prompt)
        return response.text
    except Exception as e:
        return f"Gemini API error: {str(e)}"
