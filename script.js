// script.js

const navbar = document.querySelector('.navbar');
const navLinks = document.querySelector('.nav-links');
const dropdowns = document.querySelectorAll('.nav-links li');

dropdowns.forEach(dropdown => {
  dropdown.addEventListener('click', () => {
    const dropdownMenu = dropdown.querySelector('.dropdown');
    if (dropdownMenu) {
      dropdownMenu.classList.toggle('active');
    }
  });
});

// Mobile Menu Toggle
const mobileMenu = document.querySelector('.menu-toggle');
mobileMenu.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
