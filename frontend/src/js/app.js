// DOM elements
const micButton = document.getElementById('micButton');
const responseBox = document.getElementById('responseBox');
const transcriptToggle = document.getElementById('transcriptToggle');
const transcriptBox = document.getElementById('transcriptBox');
const transcriptClose = document.getElementById('transcriptClose');
const transcriptContent = document.getElementById('transcriptContent');

// Check browser support
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
  alert('Your browser does not support Web Speech API.');
} else {
  const recognition = new SpeechRecognition();
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.continuous = false;

  micButton.addEventListener('click', () => {
    if (recognition && recognition.running) {
      recognition.stop();
      micButton.innerText = '🎤';
      return;
    }
    recognition.start();
    recognition.running = true;
    micButton.innerText = '🎙️'; // Indicate recording
  });

  recognition.onstart = () => {
    recognition.running = true;
  };
  recognition.onend = () => {
    recognition.running = false;
    micButton.innerText = '🎤';
  };

  let lastTranscript = '';

  if (transcriptToggle && transcriptBox && transcriptClose) {
    transcriptToggle.onclick = () => {
      transcriptBox.classList.toggle('hidden');
      if (!transcriptBox.classList.contains('hidden')) {
        transcriptContent.textContent = lastTranscript || 'Say something to see your transcript here.';
      }
    };
    transcriptClose.onclick = () => {
      transcriptBox.classList.add('hidden');
    };
  }

  recognition.onresult = async (event) => {
    recognition.running = false;
    const userText = event.results[0][0].transcript;
    micButton.innerText = '🎤'; // Reset icon

    // Update transcript
    lastTranscript = userText;
    if (transcriptContent && !transcriptBox.classList.contains('hidden')) {
      transcriptContent.textContent = userText;
    }

    // Show user prompt in UI (optional)
    responseBox.innerHTML = `<strong>You:</strong> ${userText}<br><em>Thinking...</em>`;
    responseBox.classList.remove('hidden');

    try {
      // Send voice input as text to backend
      const res = await fetch('http://localhost:8000/api/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt: userText })
      });

      const data = await res.json();
      const aiReply = data.reply;

      // Display AI response
      responseBox.innerHTML = `<strong>AI:</strong> ${aiReply}`;

      // Speak the AI response
      speak(aiReply);

    } catch (error) {
      console.error('Error:', error);
      responseBox.innerHTML = `<span class="text-red-400">Failed to get AI response.</span>`;
    }
  };

  recognition.onerror = (event) => {
    console.error('Speech recognition error:', event.error);
    micButton.innerText = '🎤';
    responseBox.innerHTML = `<span class="text-red-400">Recognition error: ${event.error}</span>`;
    responseBox.classList.remove('hidden');
  };
}

// Text-to-Speech
function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = 1;
  utterance.pitch = 1.2;
  speechSynthesis.speak(utterance);
}

// Add reset button logic to clear transcript
const resetButton = document.querySelector('.bg-red-600');
if (resetButton) {
  resetButton.addEventListener('click', () => {
    lastTranscript = '';
    if (transcriptContent) {
      transcriptContent.textContent = 'Say something to see your transcript here.';
    }
  });
}
