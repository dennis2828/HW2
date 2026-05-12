const questionBank = [
    
    { 
        keywords: ["projects", "automation", "python", "script"], 
        answer: "Current projects include automated Google Drive folder organization and AI-assisted web development." 
    },
    { 
        keywords: ["contact", "email", "hire", "internship"], 
        answer: "You can reach Dennis via the Contact form or GitHub. He is currently looking for summer internships in automation." 
    },
    { 
        keywords: ["hello", "hi", "hey"], 
        answer: "Hello! I'm here to help. Ask me about Dennis's projects, AI projects, or anything else you'd like to know!" 
    }
];

const chatForm = document.getElementById('chat-form');
const chatMessages = document.getElementById('chat-messages');
const chatWindow = document.getElementById('chat-window');
const userInput = document.getElementById('user-input');

chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const message = userInput.value.trim();
    if (message === "") return;
    appendMessage('You', message, 'user-msg');
    
    const botResponse = getBotResponse(message);
    
    setTimeout(() => {
        appendMessage('Bot', botResponse, 'bot-msg');
    }, 600);

    userInput.value = '';
});

function appendMessage(sender, text, className) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${className}`;
    msgDiv.innerHTML = `<strong>${sender}:</strong> ${text}`;
    
    chatMessages.appendChild(msgDiv);
    
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

function getBotResponse(input) {
    const cleanInput = input.toLowerCase();
    
    const found = questionBank.find(item => 
        item.keywords.some(keyword => cleanInput.includes(keyword))
    );

    return found ? found.answer : "That's interesting! Feel free to ask about trading, automation projects, or DRT Works.";
}