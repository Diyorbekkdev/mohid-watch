// NAVBAR SHRINK

window.addEventListener("scroll", function () {
    shrink();
  });
  
  let navbar = document.getElementById("navbar");
  
  function shrink() {
    if (scrollY > 100) {
      navbar.classList.add("navbar-shrink");
    } else {
          navbar.classList.remove("navbar-shrink");
      }
  }



/*=====================================toggle style switcher=====================*/
const styleSwitcherToggle =document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
//hide style switcher on scroll
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})
/*=====================================Theme Colors=====================*/
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled", "true");
        }
    })
}



/*=====================================Dark mode=====================*/
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun")
    dayNight.querySelector("i").classList.toggle("fa-moon")
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun")
    }
    else
    {
        dayNight.querySelector("i").classList.add("fa-moon")
    }
})





const searchBar = document.getElementById('search-bar');
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', () => {
  const searchQuery = searchBar.value;
  // Do something with the search query, like send it to a server or display search results
});





const slider = document.querySelector('.slider');
const images = slider.querySelectorAll('img');
let currentSlide = 0;

function showSlide(n) {
  images[currentSlide].classList.remove('active');
  currentSlide = (n + images.length) % images.length;
  images[currentSlide].classList.add('active');
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

slider.querySelector('.prev').addEventListener('click', prevSlide);
slider.querySelector('.next').addEventListener('click', nextSlide);

setInterval(() => {
  nextSlide();
}, 2000);

showSlide(currentSlide);




// TYPING PART
var typed = new Typed(".typing", {
    strings:["Classic","Stylish", "Modern", "Trendy", "Sleek", "Sporty", "Elegant"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})



// SEARCHBAR SUGGESTON
// const searchBar = document.getElementById('search-bar');
const searchSuggestions = document.getElementById('search-suggestions');

searchBar.addEventListener('focus', function() {
  // Show search suggestions
  searchSuggestions.style.visibility = 'visible';
  searchSuggestions.style.opacity = '1';
});

searchBar.addEventListener('blur', function() {
  // Hide search suggestions
  searchSuggestions.style.visibility = 'hidden';
  searchSuggestions.style.opacity = '0';
});

searchSuggestions.addEventListener('click', function(event) {
  // Get clicked suggestion and fill search bar with it
  const suggestion = event.target.innerText;
  searchBar.value = suggestion;
  // Hide search suggestions
  searchSuggestions.style.visibility = 'hidden';
  searchSuggestions.style.opacity = '0';
});

// Example: load search suggestions from an API or array
function loadSearchSuggestions() {
  const suggestions = ['Search suggestion 1', 'Search suggestion 2', 'Search suggestion 3'];
  const suggestionList = document.createElement('ul');
  suggestions.forEach(function(suggestion) {
    const suggestionItem = document.createElement('li');
    suggestionItem.innerText = suggestion;
    suggestionList.appendChild(suggestionItem);
  });
  searchSuggestions.appendChild(suggestionList);
}

loadSearchSuggestions();



// RATING JS
const stars = document.querySelectorAll('.star');

stars.forEach(star => {
  star.addEventListener('click', () => {
    const value = star.getAttribute('data-value');
    // Save the value to your database or do something else with it
    stars.forEach(s => s.classList.remove('active'));
    for (let i = 0; i < value; i++) {
      stars[i].classList.add('active');
    }
  });
});


const cardsContainer = document.querySelector('.cards-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let cardIndex = 0;
const cardWidth = document.querySelector('.card').offsetWidth;
const totalCards = document.querySelectorAll('.card').length;

prevBtn.addEventListener('click', slideCard);
nextBtn.addEventListener('click', slideCard);

function slideCard() {
  if (this === prevBtn) {
    cardIndex--;
  } else if (this === nextBtn) {
    cardIndex++;
  }
  if (cardIndex < 0) {
    cardIndex = totalCards - 1;
  } else if (cardIndex > totalCards - 1) {
    cardIndex = 0;
  }
  cards
}


$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });


  