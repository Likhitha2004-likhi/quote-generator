const englishQuotes = [
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt", category: "Motivation" },
  { text: "Push yourself, because no one else is going to do it for you.", author: "Unknown", category: "Motivation" },
  { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein", category: "Wisdom" },
  { text: "Do something today that your future self will thank you for.", author: "Sean Patrick Flanery", category: "Motivation" },
  { text: "Life is short. Smile while you still have teeth.", author: "Unknown", category: "Humor" },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan", category: "Motivation" },
  { text: "Success is not in what you have, but who you are.", author: "Bo Bennett", category: "Success" },
  { text: "A day without laughter is a day wasted.", author: "Charlie Chaplin", category: "Humor" },
  { text: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson", category: "Motivation" },
  { text: "Mistakes are proof that you are trying.", author: "Jennifer Lim", category: "Wisdom" },
  { text: "Love all, trust a few, do wrong to none.", author: "William Shakespeare", category: "Love" },
  { text: "The best way to predict the future is to invent it.", author: "Alan Kay", category: "Wisdom" },
  { text: "Success doesn’t just find you. You have to go out and get it.", author: "Unknown", category: "Success" },
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde", category: "Life" },
  { text: "It always seems impossible until it’s done.", author: "Nelson Mandela", category: "Motivation" },
  { text: "Your limitation—it's only your imagination.", author: "Unknown", category: "Motivation" },
  { text: "Happiness is not by chance, but by choice.", author: "Jim Rohn", category: "Life" },
  { text: "The mind is everything. What you think you become.", author: "Buddha", category: "Wisdom" },
  { text: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas Edison", category: "Wisdom" },
  { text: "Fall seven times, stand up eight.", author: "Japanese Proverb", category: "Motivation" },
  { text: "The only limit to our realization of tomorrow is our doubts today.", author: "Franklin D. Roosevelt", category: "Motivation" },
  { text: "Humor is mankind’s greatest blessing.", author: "Mark Twain", category: "Humor" },
  { text: "If opportunity doesn’t knock, build a door.", author: "Milton Berle", category: "Success" },
  { text: "Work hard in silence, let your success be the noise.", author: "Frank Ocean", category: "Success" },
  { text: "To love and be loved is to feel the sun from both sides.", author: "David Viscott", category: "Love" },
];

const kannadaQuotes = [
  { text: "ನೀನು ಸಾಧ್ಯವೆಂದು ನಂಬಿದರೆ, ಅರ್ಧ ಯಶಸ್ಸಾಗಿದೆ.", author: "ರೂಸ್‌ವೆಲ್ಟ್", category: "Motivation" },
  { text: "ನಿನ್ನ ಸಮಯ ನಿರ್ದಿಷ್ಟ, ಅದನ್ನು ವ್ಯರ್ಥ ಮಾಡಬೇಡ.", author: "ಸ್ಟೀವ್ ಜಾಬ್ಸ್", category: "Wisdom" },
  { text: "ನಗು ಹೆಚ್ಚು ಮಾಡು, ಜೀವನ ಚಿಕ್ಕದು!", author: "ಅಜ್ಞಾತ", category: "Humor" },
  { text: "ಯಶಸ್ಸು ಶ್ರಮವನ್ನಷ್ಟೆ ಗೌರವಿಸುತ್ತದೆ.", author: "ಅಜ್ಞಾತ", category: "Success" },
  { text: "ನೀನು ಬದಲಾವಣೆಯಾಗಬೇಕು ಎಂದರೆ ಬದಲಾವಣೆ ನಿನ್ನಿಂದಲೇ ಶುರುವಾಗಬೇಕು.", author: "ಮಹಾತ್ಮಾ ಗಾಂಧಿ", category: "Wisdom" },
  { text: "ಬೇರೆ ಯಾರೂ ನಿನ್ನ ಕನಸುಗಳು ನನಸಾಗಿಸಲ್ಲ, ನೀನೇ ಮಾಡಿ.", author: "ಅಜ್ಞಾತ", category: "Motivation" },
  { text: "ನಾವು ಯಾರು ಎನ್ನುವುದು ನಮ್ಮ ಕ್ರಿಯೆಯಿಂದ ನಿರ್ಧರಿಸಲಾಗುತ್ತದೆ.", author: "ಅಜ್ಞಾತ", category: "Life" },
  { text: "ನಿನ್ನ ಗೆಲುವು ನಿನ್ನ ಶ್ರದ್ಧೆಯಲ್ಲಿ ಇದೆ.", author: "ಅಜ್ಞಾತ", category: "Motivation" },
  { text: "ನೀನು ಸೋತುಹೋಗಿದೆಯೇ ಎಂಬುದಕ್ಕಿಂತ, ಏನು ಕಲಿತೀಯೆಂಬುದೇ ಮುಖ್ಯ.", author: "ಅಜ್ಞಾತ", category: "Wisdom" },
  { text: "ನಗು ಮನಸ್ಸಿಗೆ ಔಷಧಿ.", author: "ಅಜ್ಞಾತ", category: "Humor" },
  { text: "ನಿನ್ನ ಕನಸುಗಳನ್ನು ಅನುಸರಿಸು, ಅವು ನಿನ್ನನ್ನು ಯಶಸ್ಸಿಗೆ ಕರೆದೊಯ್ಯುತ್ತವೆ.", author: "ಅಜ್ಞಾತ", category: "Motivation" },
  { text: "ವಿಜಯ ಎಲ್ಲರಿಗೂ ಸಿಗುವುದಿಲ್ಲ, ಶ್ರಮಕರರಿಗೆ ಮಾತ್ರ ಸಿಗುತ್ತದೆ.", author: "ಅಜ್ಞಾತ", category: "Success" },
  { text: "ಜೀವನ ಒಂದು ಪಾಠ ಪುಸ್ತಕ, ಪ್ರತಿದಿನವೂ ಹೊಸ ಪಾಠ.", author: "ಅಜ್ಞಾತ", category: "Life" },
  { text: "ಹೃದಯದಿಂದ ಪ್ರೀತಿಸು, ಅದು ಶಕ್ತಿ.", author: "ಅಜ್ಞಾತ", category: "Love" },
  { text: "ಯಾರು ನಿನ್ನನ್ನು ನಂಬುತ್ತಾರೆ, ಅವರ ವಿಶ್ವಾಸವನ್ನು ಒಮ್ಮೆ ಕೊಲ್ಲಬೇಡ.", author: "ಅಜ್ಞಾತ", category: "Wisdom" },
  { text: "ಪ್ರೀತಿಯು ಎಲ್ಲ ವಿಷಯಗಳಿಗೂ ಉತ್ತರ.", author: "ಮದರ್ ತೆರೆಸಾ", category: "Love" },
  { text: "ಸಾಧನೆಗೆ ಒತ್ತಡವಿಲ್ಲ, ಆದರೆ ಅದು ಬೆಳವಣಿಗೆಯಾಗಿ ಪರಿಣಮಿಸುತ್ತದೆ.", author: "ಅಜ್ಞಾತ", category: "Motivation" },
  { text: "ಹಾಸ್ಯವು ಜೀವನದ ಸಿಹಿಯಾಗಿರಬಹುದು.", author: "ಅಜ್ಞಾತ", category: "Humor" },
  { text: "ಸತ್ಯವನ್ನು ಹೇಳಲು ಧೈರ್ಯ ಬೇಕು.", author: "ಅಜ್ಞಾತ", category: "Wisdom" },
  { text: "ಮೂಕ ನಗು ಯಾವಾಗಲೂ ಬಲವಾದ ಉತ್ತರ.", author: "ಅಜ್ಞಾತ", category: "Wisdom" },
  { text: "ಒಳ್ಳೆಯತನವೇ ಶ್ರೇಷ್ಠತೆಯ ಮಾರ್ಗ.", author: "ಅಜ್ಞಾತ", category: "Life" },
  { text: "ಅಸಾಧ್ಯವೆಂಬುದು ಅಸ್ತಿತ್ವದಲ್ಲಿಲ್ಲ.", author: "ಅಜ್ಞಾತ", category: "Motivation" },
  { text: "ಹೃದಯದಿಂದ ಮಾಡಿದ ಕೆಲಸವೇ ಶ್ರೇಷ್ಠ.", author: "ಅಜ್ಞಾತ", category: "Life" },
  { text: "ಪ್ರೀತಿ ಎಂದರೆ ಸಹನೆ ಮತ್ತು ಸಹಾಯ.", author: "ಅಜ್ಞಾತ", category: "Love" },
  { text: "ಬದುಕು ಸುತ್ತಲೂ ಸುಂದರವಾಗಿದೆ, ಕಣ್ಣು ತೆರೆ!", author: "ಅಜ್ಞಾತ", category: "Life" },
];



let currentLanguage = "en";
let currentQuotes = englishQuotes;

const quoteText = document.getElementById("quoteText");
const authorText = document.getElementById("authorText");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const themeToggle = document.getElementById("themeToggle");
const languageToggle = document.getElementById("languageToggle");
const categoryFilter = document.getElementById("categoryFilter");


let lastQuoteIndex = -1;

function generateQuote() {
  const selectedCategory = categoryFilter.value;
  let filteredQuotes = currentQuotes;

  if (selectedCategory !== "All") {
    filteredQuotes = currentQuotes.filter(q => q.category === selectedCategory);
  }

  if (filteredQuotes.length === 0) {
    quoteText.textContent = "No quotes found in this category.";
    authorText.textContent = "";
    return;
  }

  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * filteredQuotes.length);
  } while (randomIndex === lastQuoteIndex && filteredQuotes.length > 1);

  lastQuoteIndex = randomIndex;
  const quote = filteredQuotes[randomIndex];

  quoteText.textContent = "";
  authorText.textContent = "";
  quoteText.classList.remove("kannada");
  authorText.classList.remove("kannada");

  if (currentLanguage === "kn") {
    quoteText.classList.add("kannada");
    authorText.classList.add("kannada");
  }

  let i = 0;
  const fullText = `"${quote.text}"`;

  function typeWriter() {
    if (i < fullText.length) {
      quoteText.textContent += fullText.charAt(i);
      i++;
      setTimeout(typeWriter, 30);
    } else {
      authorText.textContent = `— ${quote.author}`;
      authorText.style.opacity = 1;
    }
  }

  typeWriter();
}




generateBtn.addEventListener("click", generateQuote);
// Auto-generate new quote every 10 seconds
setInterval(generateQuote, 10000);

copyBtn.addEventListener("click", () => {
  const quoteToCopy = `${quoteText.textContent} ${authorText.textContent}`;
  navigator.clipboard.writeText(quoteToCopy).then(() => {
    copyBtn.textContent = "✅ Copied!";
    setTimeout(() => {
      copyBtn.textContent = "📋 Copy Quote";
    }, 1500);
  });
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  themeToggle.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

languageToggle.addEventListener("click", () => {
  if (currentLanguage === "en") {
    currentLanguage = "kn";
    currentQuotes = kannadaQuotes;
    languageToggle.textContent = "🌐 English";
  } else {
    currentLanguage = "en";
    currentQuotes = englishQuotes;
    languageToggle.textContent = "🌐 Kannada";
  }

  // 💾 Save selected language
  localStorage.setItem("language", currentLanguage);

  generateQuote();
});


window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☀️ Light Mode";
  }

  // 🧠 Load saved language
  const savedLang = localStorage.getItem("language");
  if (savedLang === "kn") {
    currentLanguage = "kn";
    currentQuotes = kannadaQuotes;
    languageToggle.textContent = "🌐 English";
  } else {
    currentLanguage = "en";
    currentQuotes = englishQuotes;
    languageToggle.textContent = "🌐 Kannada";
  }

  generateQuote();
});


categoryFilter.addEventListener("change", generateQuote);
