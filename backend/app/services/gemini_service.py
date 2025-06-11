import os
import openai
from dotenv import load_dotenv

load_dotenv()

# Gemini API integration (placeholder for Google Gemini or OpenAI)
async def ask_gemini(prompt: str) -> str:
    # Example using OpenAI GPT-3/4 (replace with Gemini if available)
    openai.api_key = os.getenv("OPENAI_API_KEY")
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": prompt}]
    )
    return response.choices[0].message["content"]
