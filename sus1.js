const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navLinks.classList.toggle("nav-active");
});

document.querySelectorAll(".nav-links a").forEach(n => 
    n.addEventListener("click", () => {
        burger.classList.remove("active"); 
        navLinks.classList.remove("nav-active"); 
}));
