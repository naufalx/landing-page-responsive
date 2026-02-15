const hamburger = document.getElementById("list");
const navbar = document.getElementById("navbar");
const bordertext = document.getElementById("MAIN");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
  bordertext.classList.toggle("active");
});
