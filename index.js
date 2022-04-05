const hamburger = document.querySelector('.hamburguer');
const navMenu = document.querySelector('nav');
const navItems = document.querySelectorAll('.item-nav2');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

navItems.forEach((navItem) => {
  navItem.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
});