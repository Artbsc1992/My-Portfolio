const hamburger = document.querySelector(".hamburguer");
const navMenu = document.querySelector("nav");

hamburger.addEventListener("click", ()=> {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})