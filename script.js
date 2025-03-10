// JavaScript for adding fade-in and fade-out effects based on scroll position
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.fade-in'); // Select all elements with the fade-in class
  
    function checkVisibility() {
      const windowHeight = window.innerHeight;
  
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.top <= windowHeight * 0.8;
  
        if (isVisible) {
          section.classList.add('fade-in'); // Fade-in when in viewport
          section.classList.remove('fade-out'); // Ensure fade-out is removed
        } else {
          section.classList.remove('fade-in'); // Remove fade-in when out of view
          section.classList.add('fade-out'); // Fade-out when out of view
        }
      });
    }
  
    // Initially check visibility on page load
    checkVisibility();
  
    // Check visibility on scroll
    window.addEventListener('scroll', checkVisibility);
  });
  