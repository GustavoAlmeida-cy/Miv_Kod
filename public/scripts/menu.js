const btn_menu = document.querySelector(".btn_menu");
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav_menu");
const rm_layer = document.querySelector(".rm_layer");

btn_menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

rm_layer.addEventListener("click", () => {
  menu.classList.remove("active");
  hamburger.classList.remove("active");
});
