const nav = document.querySelector(".main-nav");
const mobileButton = document.querySelector("#mobileButton");
const links = document.querySelector("#links");
const menulinks = document.querySelectorAll(".menulink");
const toTopButton = document.querySelector("#toTopButton");

window.onscroll = () => {
  scroll();
};

scroll = () => {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    nav.classList.add("bg");
    toTopButton.style.visibility = "visible";
  } else {
    nav.classList.remove("bg");
    toTopButton.style.visibility = "hidden";
  }
};

const showMobileMenu = () => {
  links.classList.toggle("hideMenu");
};

mobileButton.addEventListener("click", showMobileMenu);
menulinks.forEach((link) => {
  link.addEventListener("click", showMobileMenu);
});
toTopButton.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
