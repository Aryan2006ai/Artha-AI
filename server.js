const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static(__dirname)); // serve index.html

app.post('/chat', (req, res) => {
    const msg = req.body.message.toLowerCase();

    let reply = "Sorry, I didn’t understand that.";

    if (msg.includes("hello")) {
        reply = "Hello! I am Artha AI 💰";
    } else if (msg.includes("sip")) {
        reply = "SIP is a Systematic Investment Plan where you invest regularly.";
    } else if (msg.includes("ppf")) {
        reply = "PPF is a government-backed savings scheme with long-term returns.";
    } else if (msg.includes("investment")) {
        reply = "Investing helps grow your money over time.";
    }

    res.json({ reply });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
