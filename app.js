// Cahe DOM elements
var header = document.querySelector("header");

// Show/hade nav based on scroll direction
var scrollPos = 0;
const showHideNav = () => {
  if (window.scrollY < 100) {
    header.classList.remove("showNav");
    header.classList.remove("hideNav");
  } else if (window.scrollY > scrollPos) {
    header.classList.remove("showNav");
    header.classList.add("hideNav");
  } else {
    header.classList.add("showNav");
    header.classList.remove("hideNav");
  }
  scrollPos = window.scrollY;
};

// Event listeners
window.addEventListener("scroll", showHideNav);
