// Selectors
const mobileMenu = document.querySelector('#mobile-menu');
const header = document.querySelector('.header');

const overlay = document.querySelector('.overlay')

// Event Listners
mobileMenu.addEventListener('click', mobileBtn);

// Functions

// Adding Mobile Menu animation class 
function mobileBtn() {
  if (header.classList.contains('open')) {
    header.classList.remove('open');
    overlay.classList.remove('fade-in');
    overlay.classList.add('fade-out');
  } else {
    header.classList.add('open');
    overlay.classList.remove('fade-out');
    overlay.classList.add('fade-in')
  }
  // console.log("working");
}