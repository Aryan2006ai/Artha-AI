async function sendMessage() {
    const input = document.getElementById("input");
    const chatbox = document.getElementById("chatbox");

    const userMsg = input.value;

    chatbox.innerHTML += "<p><b>You:</b> " + userMsg + "</p>";

    const res = await fetch('/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg })
    });

    const data = await res.json();

    chatbox.innerHTML += "<p><b>Artha AI:</b> " + data.reply + "</p>";

    input.value = "";
}    return 'AI stands for Artificial Intelligence, which enables machines to mimic human intelligence.';
  } 
  else if (msg.includes('what is machine learning')) {
    return 'Machine Learning is a subset of AI that allows systems to learn from data and improve automatically.';
  } 
  else if (msg.includes('what is cloud computing')) {
    return 'Cloud computing delivers computing services like storage and servers over the internet.';
  } 
  else if (msg.includes('what is aws')) {
    return 'AWS (Amazon Web Services) is a cloud platform that provides computing power, storage, and more.';
  } 
  else if (msg.includes('what is digital marketing')) {
    return 'Digital marketing promotes products using online platforms like social media and search engines.';
  } 
  else if (msg.includes('what is blockchain')) {
    return 'Blockchain is a decentralized digital ledger used to record transactions securely.';
  } 
  else if (msg.includes('what is cryptocurrency')) {
    return 'Cryptocurrency is a digital currency secured by cryptography, like Bitcoin.';
  } 
  else if (msg.includes('what is budgeting')) {
    return 'Budgeting is the process of planning your income and expenses.';
  } 
  else if (msg.includes('what is savings')) {
    return 'Savings is the portion of income not spent and kept aside for future use.';
  } 
  else if (msg.includes('what is investment')) {
    return 'Investment means putting money into assets to generate returns over time.';
  } 
  else if (msg.includes('what is stock market')) {
    return 'The stock market is a place where shares of companies are bought and sold.';
  } 
  else if (msg.includes('what is mutual fund')) {
    return 'A mutual fund pools money from investors to invest in stocks, bonds, or other assets.';
  } 
  else if (msg.includes('what is banking')) {
    return 'Banking involves managing money through institutions like deposits, loans, and payments.';
  } 
  else if (msg.includes('what is entrepreneurship')) {
    return 'Entrepreneurship is the process of starting and running a business.';
  } 
  else if (msg.includes('what is marketing')) {
    return 'Marketing is the activity of promoting and selling products or services.';
  } 
  else if (msg.includes('bye')) {
    return 'Goodbye! Have a great day!';
  } 
  else {
    return "I'm not sure how to respond to that. Try asking about finance, AI, or technology!";
  }
}    return 'A mutual fund pools money from investors to invest in stocks, bonds, or other assets.';
  } 
  else if (msg.includes('what is banking')) {
    return 'Banking involves managing money through institutions like deposits, loans, and payments.';
  } 
  else if (msg.includes('what is entrepreneurship')) {
    return 'Entrepreneurship is the process of starting and running a business.';
  } 
  else if (msg.includes('what is marketing')) {
    return 'Marketing is the activity of promoting and selling products or services.';
  } 
  else if (msg.includes('bye')) {
    return 'Goodbye! Have a great day!';
  } 
  else {
    return "I'm not sure how to respond to that. Try asking about finance, AI, or technology!";
  }
}
