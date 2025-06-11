// If you want to use API calls in a modular way, you can export functions here.
export async function askAI(prompt) {
  const res = await fetch('http://localhost:8000/api/ask', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt })
  });
  return res.json();
}

export async function transcribeAudio(file) {
  const formData = new FormData();
  formData.append('file', file);
  const res = await fetch('http://localhost:8000/api/transcribe', {
    method: 'POST',
    body: formData
  });
  return res.json();
}