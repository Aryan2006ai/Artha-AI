async function sendMessage() {
    const input = document.getElementById("user-input");
    const chatBox = document.querySelector(".chat-box");

    const userText = input.value;

    if (!userText) return;

    // Show user message
    const userMsg = document.createElement("div");
    userMsg.classList.add("message", "user");
    userMsg.innerText = userText;
    chatBox.appendChild(userMsg);

    // Send to backend
    const res = await fetch('/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText })
    });

    const data = await res.json();

    // Show bot reply
    const botMsg = document.createElement("div");
    botMsg.classList.add("message", "bot");
    botMsg.innerText = data.reply;
    chatBox.appendChild(botMsg);

    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}  } 
  else {
    return "I'm not sure how to respond to that. Try asking about finance, AI, or technology!";
  }
}
