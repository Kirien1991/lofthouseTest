//burger
const burgerBtn = document.getElementById("burger");
const menu = document.getElementById("menu");

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("active");
  menu.classList.toggle("active");
  document.body.classList.toggle("menu_mobile_didden");
});

//phone mask
mask("[data-tel-input]");

const phoneInputs = document.querySelectorAll("[data-tel-input]");
phoneInputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.value == "+") input.value = "";
  });
  input.addEventListener("blur", () => {
    if (input.value == "+") input.value = "";
  });
});
