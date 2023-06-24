// Get current time and update the clock
function updateTime() {
  const now = new Date();
  const timeElement = document.getElementById('time');
  timeElement.innerText = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

// Get current date and update the calendar
function updateDate() {
  const now = new Date();
  const dateElement = document.getElementById('date');
  dateElement.innerText = now.toLocaleDateString();
}

// Display a random motivational quote
function displayQuote() {
  const quotes = [
    "Believe you can and you're halfway there.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    // Add more quotes as needed
  ];
  const quoteElement = document.getElementById('quote');
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.innerText = quotes[randomIndex];
}

// Get time of day and personalize greeting
function personalizeGreeting() {
  const now = new Date();
  const hour = now.getHours();
  const greetingElement = document.getElementById('greeting');
  let greeting;

  if (hour >= 5 && hour < 12) {
    greeting = "Good Morning,";
  } else if (hour >= 12 && hour < 18) {
    greeting = "Good Afternoon,";
  } else {
    greeting = "Good Evening,";
  }

  const name = "Callista"; // Replace with the desired name
  greetingElement.innerText = `${greeting} ${name}`;
  greetingElement.classList.add('handwriting');
}


// Update time, date, quote, and greeting every second
setInterval(updateTime, 1000);
updateTime();
updateDate();
displayQuote();
personalizeGreeting();

// ... existing code ...

// Perform search when search button is clicked
const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', performSearch);

// Perform search when "Enter" key is pressed in the search input field
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    performSearch();
  }
});

// Function to perform the search
function performSearch() {
  const searchTerm = searchInput.value;
  if (searchTerm.trim() !== '') {
    const searchUrl = 'https://www.google.com/search?q=' + encodeURIComponent(searchTerm);
    window.open(searchUrl, '_blank');
    searchInput.value = '';
  }
}

// toggle mode
const toggleModeBtn = document.getElementById('toggle-mode');
const body = document.body;
let isDarkMode = false;

toggleModeBtn.addEventListener('click', function() {
  isDarkMode = !isDarkMode;
  body.classList.toggle('dark-mode');
  const backgroundImage = isDarkMode ? 'url("night1.jpg")' : 'url("wallpaperflare.com_wallpaper.jpg")';
  body.style.backgroundImage = backgroundImage;
});
