function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  document.getElementById("quote").innerText = `"${quote.content}"`;
  document.getElementById("author").innerText = `— ${quote.author}`;
}

// New Quote button
document.getElementById("new-quote").addEventListener("click", generateQuote);

// Speak button
document.getElementById("speak").addEventListener("click", () => {
  const text = document.getElementById("quote").innerText + " " + document.getElementById("author").innerText;
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
});

// Copy button
document.getElementById("copy").addEventListener("click", () => {
  const text = `${document.getElementById("quote").innerText} ${document.getElementById("author").innerText}`;
  navigator.clipboard.writeText(text);
  alert("Quote copied to clipboard!");
});

// Tweet button
document.getElementById("tweet").addEventListener("click", () => {
  const text = `${document.getElementById("quote").innerText} ${document.getElementById("author").innerText}`;
  const tweetURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
  window.open(tweetURL, "_blank");
});

// Initial load
generateQuote();
