/* =====================================
   main.js — MatthiasKey.com
   Handles navigation, scrolling, and forms
===================================== */

// Wait until DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {

  /* --------------------------
     MOBILE NAVIGATION TOGGLE
  -------------------------- */
  const nav = document.querySelector('.nav-links');
  const logo = document.querySelector('.logo');
  
  // Create a hamburger button dynamically for mobile view
  const menuBtn = document.createElement('button');
  menuBtn.classList.add('menu-btn');
  menuBtn.innerHTML = '&#9776;'; // hamburger icon
  logo.insertAdjacentElement('afterend', menuBtn);

  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('open');
    menuBtn.classList.toggle('active');
  });

  /* --------------------------
     SMOOTH SCROLLING
  -------------------------- */
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  internalLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  /* --------------------------
     NEWSLETTER FORM VALIDATION
  -------------------------- */
  const form = document.querySelector('.newsletter-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      const emailInput = form.querySelector('input[type="email"]');
      const emailValue = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(emailValue)) {
        e.preventDefault();
        alert('Please enter a valid email address.');
        emailInput.focus();
      } else {
        alert('Thank you for subscribing!');
      }
    });
  }

});