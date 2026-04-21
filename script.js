async function sendMessage() {
    const input = document.getElementById("user-input");
    console.log("clicked");

    const userText = input.value.toLowerCase();

    if (!userText) return;

    // Show user message
    const userMsg = document.createElement("div");
    userMsg.classList.add("message", "user");
    userMsg.innerText = userText;
    chatBox.appendChild(userMsg);

    // LOCAL RESPONSE (NO SERVER)
    let reply = "Sorry, I didn’t understand that.";

    if (userText.includes("sip")) {
        reply = "SIP is a Systematic Investment Plan.";
    } else if (userText.includes("ppf")) {
        reply = "PPF is a government-backed savings scheme.";
    } else if (userText.includes("hello")) {
        reply = "Hello! I am Artha AI 💰";
    }

    // Show bot reply
    const botMsg = document.createElement("div");
    botMsg.classList.add("message", "bot");
    botMsg.innerText = reply;
    chatBox.appendChild(botMsg);

    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}
