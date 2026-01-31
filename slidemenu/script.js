const btn = document.getElementById("btn");
const slideMenu = document.querySelector(".slide-menu");

btn.addEventListener("click", () => {
  slideMenu.classList.toggle("active");
});
