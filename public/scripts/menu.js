// menu.js

document.addEventListener("DOMContentLoaded", () => {
  const btnMenu = document.querySelector(".btn_menu");
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav_menu");
  const rmLayer = document.querySelector(".rm_layer");

  if (!btnMenu || !hamburger || !navMenu || !rmLayer) {
    console.warn("Menu: Um ou mais elementos não foram encontrados.");
    return;
  }

  const toggleMenu = () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
  };

  const closeMenu = () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  };

  btnMenu.addEventListener("click", toggleMenu);
  rmLayer.addEventListener("click", closeMenu);
});
