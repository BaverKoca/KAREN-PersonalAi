# KAREN Personal AI

![Image](https://github.com/user-attachments/assets/0dac30e4-319f-4c75-a04c-14e1b7822ca8)

---

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Python](https://img.shields.io/badge/Python-3.8%2B-blue.svg)](https://www.python.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-Backend-green)](https://fastapi.tiangolo.com/)
[![Vite](https://img.shields.io/badge/Vite-Frontend-blueviolet)](https://vitejs.dev/)

---

## 🚀 Overview
KAREN Personal AI is a modern, voice-driven AI assistant web app powered by Gemini (Google Generative AI) or OpenAI. Speak your request, get instant answers in text and voice, and enjoy a futuristic, beautiful UI.

---

## ✨ Features
- 🎤 **Voice Input:** Use your microphone to ask questions or give commands.
- 🤖 **AI-Powered:** Integrates with Gemini (Google) or OpenAI for smart, conversational responses.
- 🗣️ **Speech-to-Text:** Converts your speech to text in real time.
- 🔊 **Text-to-Speech:** AI answers are spoken back to you with natural voice.
- 💎 **Modern UI:** Futuristic, responsive design with Orbitron font and Tailwind CSS.
- 🕑 **History & Controls:** Easily access settings, history, and reset the conversation.

---

## 🛠️ Tech Stack
- **Backend:** Python, FastAPI, Gemini (Google Generative AI), OpenAI, SpeechRecognition, pyttsx3
- **Frontend:** Vite, Vanilla JS, Tailwind CSS, Web Speech API

---

## 🗂️ Project Structure
```
backend/    # FastAPI backend (AI, speech, API)
frontend/   # Vite frontend (HTML, CSS, JS)
docs/       # Documentation
```

---

## ⚡ Quick Start

### 1. Backend Setup (Python/FastAPI)
```powershell
cd backend
pip install -r requirements.txt
python -m uvicorn app.main:app --reload
```
- The backend runs at: [http://localhost:8000](http://localhost:8000)

### 2. Frontend Setup (Vite + Vanilla JS)
```powershell
cd frontend
npm install
npm run dev
```
- The frontend runs at: [http://localhost:5173](http://localhost:5173)

---

## ⚙️ Environment Variables
Create a `.env` file in `backend/`:
```
# For Gemini (Google Generative AI)
GEMINI_API_KEY=your_gemini_key_here

# Or for OpenAI (if you switch backend code)
OPENAI_API_KEY=your_openai_key_here
```

---

## 📦 Dependencies
- **Python:** fastapi, uvicorn, openai, google-generativeai, speechrecognition, pyttsx3, python-dotenv, python-multipart
- **Node:** vite

---

## 🧩 Switching AI Providers
- By default, the backend uses Gemini (Google Generative AI) if `GEMINI_API_KEY` is set.
- To use OpenAI, update the backend code in `gemini_service.py` and set `OPENAI_API_KEY`.

---

## 🐞 Troubleshooting
- **No AI response?** Check your `.env` file for a valid API key and ensure you have internet access.
- **Form data error?** Make sure `python-multipart` is installed (already in requirements).
- **OpenAI errors?** Use the latest OpenAI API code (see backend/services/gemini_service.py for details).
- **Gemini errors?** Ensure your Google API key is correct and has access to Gemini.

---

## 📄 Documentation
- See `docs/architecture.md` for architecture overview
- See `docs/setup.md` for detailed setup instructions

---

## 💡 Credits
- UI inspired by modern AI assistants
- Built by Baver Koca, 2025

---

## 📬 Feedback & Contributions
Pull requests and issues are welcome!
