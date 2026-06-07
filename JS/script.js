// Search icon click event
const searchIcon = document.getElementById("searchIcon");
const searchInput = document.getElementById("searchInput");

searchIcon.addEventListener("click", function () {
  const searchValue = searchInput.value.trim();

  if (searchValue !== "") {
    console.log("Search for: " + searchValue);
    alert("Searching for: " + searchValue);
  } else {
    alert("Please enter a search term");
  }
    });
searchInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    searchIcon.click();
  }
});

// Language switching
const languageButtons = document.querySelectorAll('.lang-btn');

languageButtons.forEach(button => {
  button.addEventListener('click', function() {
    const selectedLang = this.getAttribute('data-lang');
    
    // Remove active class from all buttons
    languageButtons.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to clicked button
    this.classList.add('active');
    
    // Store language preference
    localStorage.setItem('selectedLanguage', selectedLang);
    
    // Translate page content
    translatePage(selectedLang);
    
    console.log('Language changed to: ' + selectedLang);
  });
});

// Translation object
const translations = {
  en: {
    'home': 'Home',
    'products': 'Products',
    'about': 'About Us',
    'contact': 'Contact'
  },
  kh: {
    'home': 'ទំព័រដើម',
    'products': 'ផលិតផល',
    'about': 'អំពីយើង',
    'contact': 'ទំនាក់ទំនង'
  }
};

function translatePage(lang) {
  const menuItems = document.querySelectorAll('.menu ul li a');
  const menuKeys = ['home', 'products', 'about', 'contact'];
  
  menuItems.forEach((item, index) => {
    if (translations[lang] && translations[lang][menuKeys[index]]) {
      item.textContent = translations[lang][menuKeys[index]];
    }
  });
}

// Load saved language preference on page load
window.addEventListener('DOMContentLoaded', function() {
  const savedLang = localStorage.getItem('selectedLanguage') || 'en';
  const langButton = document.querySelector(`[data-lang="${savedLang}"]`);
  
  if (langButton) {
    languageButtons.forEach(btn => btn.classList.remove('active'));
    langButton.classList.add('active');
    translatePage(savedLang);
  }
});
