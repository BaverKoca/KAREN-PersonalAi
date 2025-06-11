# KAREN Personal AI

A modern, voice-driven AI assistant web app powered by Gemini (or OpenAI). Speak your request, get instant answers in text and voice, and enjoy a futuristic, beautiful UI.

---

## ✨ Features
- **Voice Input:** Use your microphone to ask questions or give commands.
- **AI-Powered:** Integrates with Gemini (or OpenAI) for smart, conversational responses.
- **Speech-to-Text:** Converts your speech to text in real time.
- **Text-to-Speech:** AI answers are spoken back to you with natural voice.
- **Modern UI:** Futuristic, responsive design with Orbitron font and Tailwind CSS.
- **History & Controls:** Easily access settings, history, and reset the conversation.

---

## 🚀 Quick Start

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

## 🗂️ Project Structure
```
backend/    # FastAPI backend (AI, speech, API)
frontend/   # Vite frontend (HTML, CSS, JS)
docs/       # Documentation
```

---

## 🛠️ Tech Stack
- **Backend:** Python, FastAPI, OpenAI/Gemini, SpeechRecognition, pyttsx3
- **Frontend:** Vite, Vanilla JS, Tailwind CSS, Web Speech API

---

## ⚙️ Environment Variables
Create a `.env` file in `backend/`:
```
OPENAI_API_KEY=your_openai_key_here
# Or GEMINI_API_KEY=your_gemini_key_here
```

---

## 📦 Dependencies
- Python: fastapi, uvicorn, openai, speechrecognition, pyttsx3, python-dotenv
- Node: vite

---

## 📄 Documentation
- See `docs/architecture.md` for architecture overview
- See `docs/setup.md` for detailed setup instructions

---

## 💡 Credits
- UI inspired by modern AI assistants
- Built by Baver Koca, 2025

---

## 🖼️ Preview
![screenshot](frontend/public/assets/images/preview.png)

---

## 📬 Feedback & Contributions
Pull requests and issues are welcome!