// 🌗 Theme Toggle
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  toggleBtn.textContent = '🌞';
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  toggleBtn.textContent = isDark ? '🌞' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// 📊 Quote Count
let quoteCount = 0;

function updateQuoteCount() {
  quoteCount++;
  document.getElementById("quote-count").innerText = `Quotes generated: ${quoteCount}`;
}

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  document.getElementById("quote").innerText = `"${quote.content}"`;
  document.getElementById("author").innerText = `— ${quote.author}`;

  updateQuoteCount();
}

// ✨ New Quote
document.getElementById("new-quote").addEventListener("click", generateQuote);

// 🗣️ Speak
document.getElementById("speak").addEventListener("click", () => {
  const text = document.getElementById("quote").innerText + " " + document.getElementById("author").innerText;
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
});

// 📋 Copy
document.getElementById("copy").addEventListener("click", () => {
  const text = `${document.getElementById("quote").innerText} ${document.getElementById("author").innerText}`;
  navigator.clipboard.writeText(text);
  alert("Quote copied to clipboard!");
});

// 🐦 Tweet
document.getElementById("tweet").addEventListener("click", () => {
  const text = `${document.getElementById("quote").innerText} ${document.getElementById("author").innerText}`;
  const tweetURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
  window.open(tweetURL, "_blank");
});

// 🟢 WhatsApp
document.getElementById("whatsapp").addEventListener("click", () => {
  const text = `${document.getElementById("quote").innerText} ${document.getElementById("author").innerText}`;
  const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
});

// Initial Load
generateQuote();
