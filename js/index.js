//burger
const burgerBtn = document.getElementById("burger");
const menu = document.getElementById("menu");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("active");
  menu.classList.toggle("active");
});
