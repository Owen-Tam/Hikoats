let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();
timeline
  .to(".person", 3, { y: -600 })
  .to(".range", 3, { y: -400 }, "-=3")
  .to(".background", 3, { y: 50 }, "-=3")
  .to("#section-about", 3, { top: "0%" }, "-=3");
let scene = new ScrollMagic.Scene({
  triggerElement: ".all",
  duration: "110%",
  triggerHook: 0,
})
  .setTween(timeline)
  .setPin(".all")
  .addTo(controller);
const nav = document.querySelector("nav");
const navButton = document.querySelector(".nav-button");
const navbar = document.querySelector(".navbar");
nav.classList.remove("nav-active");
navButton.addEventListener("click", function () {
  nav.classList.toggle("nav-active");
  navButton.classList.toggle("nav-button-active");
});
navbar.addEventListener("click", function (e) {
  e.preventDefault();
  nav.classList.toggle("nav-active");
  navButton.classList.toggle("nav-button-active");
  if (!e.target.classList.contains("nav-link")) {
    return;
  }
  const scrollTo = document.querySelector(
    `#section-${e.target.dataset.section}`
  );
  console.log(scrollTo);
  scrollTo.scrollIntoView({ behavior: "smooth" });
});
const loader = document.querySelector(".loader");
window.addEventListener("load", function () {
  this.setTimeout(function () {
    loader.classList.add("finish");
  }, 3000);
});
