// JavaScript code for handling the navigation menu

document.addEventListener("DOMContentLoaded", function () {
    const hamBtn = document.querySelector(".ham-btn");
    const timesBtn = document.querySelector(".times-btn");
    const navBar = document.querySelector("#nav-bar");
  
    // Function to open the navigation menu
    function openNavMenu() {
      navBar.classList.add("active");
    }
  
    // Function to close the navigation menu
    function closeNavMenu() {
      navBar.classList.remove("active");
    }
  
    // Event listeners for the hamburger and times buttons
    hamBtn.addEventListener("click", openNavMenu);
    timesBtn.addEventListener("click", closeNavMenu);
  });
  
  // Function to scroll to the top of the page smoothly
function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}

// Show/hide the button based on scroll position
window.addEventListener('scroll', () => {
  const button = document.getElementById('back-to-top-btn');
  if (window.scrollY > 300) {
      button.style.display = 'block';
  } else {
      button.style.display = 'none';
  }
});



