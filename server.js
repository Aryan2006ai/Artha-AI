const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

// Chat API
app.post('/chat', (req, res) => {
    const msg = req.body.message.toLowerCase();

    let reply = "Sorry, I don't understand.";

    if (msg.includes("sip")) {
        reply = "SIP is a Systematic Investment Plan.";
    } else if (msg.includes("ppf")) {
        reply = "PPF is a long-term government-backed savings scheme.";
    } else if (msg.includes("hello")) {
        reply = "Hello! I am Artha AI. Ask me anything about finance.";
    }

    res.json({ reply });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
