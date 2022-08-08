const hamburgerBtn = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const linksContainer = document.querySelector(".links-container");
const date = document.querySelector("#date");

hamburgerBtn.addEventListener("click", () => {
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const navLinksHeight = navLinks.getBoundingClientRect().height;
  // console.log(
  //   "🚀 ~ file: main.js ~ line 8 ~ hamburgerBtn.addEventListener ~ containerHeight",
  //   containerHeight,
  //   typeof containerHeight
  // );
  // console.log(
  //   "🚀 ~ file: main.js ~ line 9 ~ hamburgerBtn.addEventListener ~ navLinksHeight",
  //   navLinksHeight,
  //   typeof navLinksHeight
  // );

  if (containerHeight === 0) {
    // console.log("click");
    linksContainer.style.height = `${navLinksHeight}px`;
    // console.log(
    //   "🚀 ~ file: main.js ~ line 23 ~ hamburgerBtn.addEventListener ~     linksContainer.style.height = `${navLinksHeight}px`",
    //   (linksContainer.style.height = `${navLinksHeight}px`)
    // );

    hamburgerBtn.classList.remove("rotate-minus");

    hamburgerBtn.classList.add("rotate-plus");
  } else {
    linksContainer.style.height = "0";
    hamburgerBtn.classList.add("rotate-minus");

    hamburgerBtn.classList.remove("rotate-plus");
  }

  // console.log(containerHeight);

  // linksContainer.classList.toggle("show-links");
});

// date
date.innerHTML = new Date().getFullYear();

// fixed navbar

const header = document.querySelector(".header");
const btnTop = document.querySelector(".btn-top");

window.addEventListener("scroll", function () {
  // console.log(window.scrollY);
  const scrollHeight = window.scrollY;
  // console.log("🚀 ~ file: main.js ~ line 54 ~ scrollHeight", scrollHeight);
  const headerHeight = header.getBoundingClientRect().height;
  // console.log("🚀 ~ file: main.js ~ line 55 ~ headerHeight", headerHeight);

  if (scrollHeight > headerHeight) {
    header.classList.add("fixed-nav");
  } else {
    header.classList.remove("fixed-nav");
  }

  if (scrollHeight > 100) {
    btnTop.classList.add("btn-top-active");
  } else {
    btnTop.classList.remove("btn-top-active");
  }
});

const scrollLinks = document.querySelectorAll(".nav-links li a");

scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log(e.currentTarget.getAttribute("href").slice(1));
    const id = e.currentTarget.getAttribute("href").slice(1);
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const navLinksHeight = navLinks.getBoundingClientRect().height;
    linksContainer.style.height = "0";
    hamburgerBtn.classList.add("rotate-minus");

    hamburgerBtn.classList.remove("rotate-plus");
    const element = document.getElementById(id);

    const position = element.offsetTop;
    // console.log(position);

    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});
