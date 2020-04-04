// Cahe DOM elements
var navbar = document.querySelector("nav");

// Show/hade nav based on scroll direction
var scrollPos = 0;
const showHideNav = () => {
  if (window.scrollY === 0 || window.scrollY > scrollPos) {
    navbar.classList.remove("showNav");
  } else {
    navbar.classList.add("showNav");
  } 
  scrollPos = window.scrollY;
};

// Event listeners
window.addEventListener("scroll", showHideNav);
