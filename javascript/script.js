// Namespace
const portfolio = {};

// Document Ready
$(document).ready(function(){
    portfolio.init();
})

// Init
portfolio.init = () => {
    AOS.init();
    portfolio.introHeading();
    portfolio.hamburger();
    portfolio.uncheckHamburger();
}

// Typed.js function in header intro 
portfolio.introHeading = () => {
    let options = {
        strings: ["", "Front-end Developer", "Personal finance Enthusiast", "Cat lover"],
        typeSpeed: 50,
        loop: true,
        backDelay: 2000
    };

    let typed = new Typed('.introduction', options);
}

portfolio.hamburger = () => {
  const hamburger = document.querySelector(".hamburger");
  const checkbox = document.querySelector("#toggle");
  
  // On click
  checkbox.addEventListener("change", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, -> open/close menu
  })
}

portfolio.uncheckHamburger = () => {
  $('.scroll').on('click', () => {
    $('#toggle').prop('checked', false);
    $('.hamburger').removeClass('is-active');
  })
  
}

