//Mobile NAVIGATION and Burger button events

const burger = document.querySelector(".burger");
const mobileNav = document.querySelector(".mobile");
const mobileLinks = document.querySelectorAll(".mobile__link");

const toggleActive = () => {
  burger.classList.toggle("burger--active");
  mobileNav.classList.toggle("mobile--active");
};

burger.addEventListener("click", toggleActive);
mobileLinks.forEach(link => link.addEventListener("click", toggleActive));

// Animation Library

AOS.init({
  delay: 200, // values from 0 to 3000, with step 50ms
  duration: 800 // values from 0 to 3000, with step 50ms
});
