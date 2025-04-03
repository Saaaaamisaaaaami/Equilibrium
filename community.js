let currentChat = '';
let isGroupChat = false;

let dummyMessages = {
    'Alice': ['Hey there!', 'How are you?'],
    'Bob': ['Hi!', 'Wanna hang out?'],
    'Charlie': ['Yo!', 'Check this out.'],
    'Study Group': ['Alice: Let’s start the assignment.', 'Bob: Ugh, already?', 'Charlie: I forgot about it.'],
    'Friends': ['Alice: Who’s up for a movie?', 'Bob: Me!', 'Charlie: Same.']
};

// Function to open individual or group chat
function openChat(name, group = false) {
    currentChat = name;
    isGroupChat = group;
    document.getElementById('chat-title').innerText = 'Chat with ' + name;

    let messagesDiv = document.getElementById('messages');
    messagesDiv.innerHTML = ''; // Clear messages
    dummyMessages[name].forEach(msg => {
        let p = document.createElement('p');
        p.innerText = msg;
        messagesDiv.appendChild(p);
    });
}

// Function to send messages
function sendMessage() {
    let input = document.getElementById('message-input');
    if (input.value.trim() !== '' && currentChat !== '') {
        let messagesDiv = document.getElementById('messages');

        // Add user message
        let userMessage = document.createElement('p');
        userMessage.innerText = 'You: ' + input.value;
        userMessage.style.textAlign = 'right';
        messagesDiv.appendChild(userMessage);

        let userText = input.value.toLowerCase();
        input.value = '';

        // AI/Group Replies after 1 second
        setTimeout(() => {
            let botReply = document.createElement('p');
            botReply.innerText = generateResponse(userText);
            messagesDiv.appendChild(botReply);
        }, 1000);
    }
}

// Generate responses (random for individuals and groups)
function generateResponse(userText) {
    if (isGroupChat) {
        return generateGroupResponse(userText);
    } else {
        return currentChat + ': ' + generateRandomResponse(userText);
    }
}

// Group chat responses (random members respond)
function generateGroupResponse(userText) {
    let members = ['Alice', 'Bob', 'Charlie'];
    let randomMembers = shuffleArray(members).slice(0, 2); // Pick 2 random members
    let responses = randomMembers.map(member => `${member}: ${generateRandomResponse(userText)}`);
    return responses.join('\n'); // Combine multiple responses
}

// Randomized AI response
function generateRandomResponse(userText) {
    let responses = [
        "Interesting!",
        "Oh, really?",
        "Haha, that's funny!",
        "I see what you mean.",
        "I totally agree!",
        "No way, seriously?",
        "That’s a great point.",
        "I never thought about it that way!",
        "Hmm, let me think about that.",
        "Well, that's unexpected!"
    ];

    return responses[Math.floor(Math.random() * responses.length)];
}

// Helper function to shuffle an array
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}
