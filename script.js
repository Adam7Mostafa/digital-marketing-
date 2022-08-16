let menuIcons = document.querySelectorAll(".menu-icon");
let toggleMenu = document.querySelector(".toggle-menu");
let phoneMenu = document.querySelector(".phone-menu");

menuIcons.forEach(function (icon) {
  icon.onclick = function (e) {
    menuIcons.forEach(function (icon) {
      icon.classList.toggle("active");
    });
    phoneMenu.classList.toggle("active");
  };
});

//change navbar style on scroll
let services = document.querySelector(".services");
let navbar = document.querySelector(".navbar");

function navbarStyle() {
  if (window.scrollY >= services.offsetTop) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
}

// on scroll 
window.onscroll = function () {
  navbarStyle();
};
