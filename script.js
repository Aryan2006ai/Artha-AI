function sendMessage() {
    const input = document.getElementById("user-input");
    const chatBox = document.querySelector(".chat-box");

    const userText = input.value;

    if (!userText) return;

    // User message
    const userMsg = document.createElement("div");
    userMsg.className = "message user";
    userMsg.innerText = userText;
    chatBox.appendChild(userMsg);

    // Bot logic
    let reply = "I didn’t understand that.";

    if (userText.toLowerCase().includes("sip")) {
        reply = "SIP is a Systematic Investment Plan.";
    } else if (userText.toLowerCase().includes("ppf")) {
        reply = "PPF is a government savings scheme.";
    }

    // Bot reply
    const botMsg = document.createElement("div");
    botMsg.className = "message bot";
    botMsg.innerText = reply;
    chatBox.appendChild(botMsg);

    input.value = "";
}
