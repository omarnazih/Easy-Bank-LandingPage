// Selectors
const mobileMenu = document.querySelector('#mobile-menu');
const header = document.querySelector('.header');

const overlay = document.querySelector('.overlay');

const toggleMenu = document.querySelector('.header__menu');

// Event Listners
mobileMenu.addEventListener('click', mobileBtn);

// Functions

// Adding Mobile Menu animation class 
function mobileBtn() {
  if (header.classList.contains('open')) {
    header.classList.remove('open');
    overlay.classList.remove('fade-in');
    overlay.classList.add('fade-out');
    toggleMenu.style.display = "none";
  } else {
    header.classList.add('open');
    overlay.classList.remove('fade-out');
    overlay.classList.add('fade-in');
    toggleMenu.style.display = "flex";
  }
  // console.log("working");
}