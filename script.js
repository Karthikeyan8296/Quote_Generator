const quotes = [
  {
    text: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin",
  },
  {
    text: "Do something today that your future self will thank you for.",
    author: "Patrick",
  },
  { text: "Dream big and dare to fail.", author: "Norman" },
  {
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Roosevelt",
  },
  {
    text: "Act as if what you do makes a difference. It does.",
    author: "James",
  },
];

function getQuote() {
  const quoteBox = document.querySelector(".quote-box");
  quoteBox.style.opacity = 0;

  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selected = quotes[randomIndex];
    document.getElementById("quote").innerText = `"${selected.text}"`;
    document.getElementById("author").innerText = `- ${selected.author}`;
    quoteBox.style.opacity = 1;
  }, 100);
}

function tweetQuote() {
  const quote = document.getElementById("quote").innerText;
  const author = document.getElementById("author").innerText;

  const tweetText = `${quote} ${author}`;
  const tweetUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(
    tweetText
  )}`;
  window.open(tweetUrl, "_blank");
}
