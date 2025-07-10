//burger
const burgerBtn = document.getElementById("burger");
const menu = document.getElementById("menu");
const body = document.body;

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("active");
  menu.classList.toggle("active");
  body.classList.toggle("no-scroll");
});
