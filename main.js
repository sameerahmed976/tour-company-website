const hamburgerBtn = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburgerBtn.addEventListener("click", () => {
  if (navLinks.classList.contains("show-links")) {
    navLinks.classList.remove("show-links");
    hamburgerBtn.classList.remove("rotate-plus");
    hamburgerBtn.classList.add("rotate-minus");
  } else {
    navLinks.classList.add("show-links");
    hamburgerBtn.classList.remove("rotate-minus");
    hamburgerBtn.classList.add("rotate-plus");
  }
});
