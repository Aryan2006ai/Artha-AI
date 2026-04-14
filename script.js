const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    sendMessage();
  }
});

function sendMessage() {
  const message = userInput.value.trim();
  if (message === '') return;

  addMessage(message, 'user');
  userInput.value = '';

  const response = getResponse(message);
  addMessage(response, 'bot');
}

function addMessage(message, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${sender}`;
  messageDiv.innerText = message;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getResponse(message) {
  const msg = message.toLowerCase();

  if (msg.includes('hello') || msg.includes('hi')) {
    return 'Hello! I am Artha AI. How can I assist you today?';
  } 
  else if (msg.includes('how are you')) {
    return 'I am functioning perfectly and ready to help!';
  } 
  else if (msg.includes('what is ppf')) {
    return 'PPF (Public Provident Fund) is a long-term savings scheme backed by the Government of India with tax benefits.';
  } 
  else if (msg.includes('what is gdp')) {
    return 'GDP (Gross Domestic Product) is the total value of goods and services produced in a country.';
  } 
  else if (msg.includes('what is inflation')) {
    return 'Inflation is the rate at which the general level of prices for goods and services rises.';
  } 
  else if (msg.includes('what is ai')) {
    return 'AI stands for Artificial Intelligence, which enables machines to mimic human intelligence.';
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
}
