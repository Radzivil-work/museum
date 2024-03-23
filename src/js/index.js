const humburger = document.querySelector('.humburger');
const mobileBack = document.querySelector('.header__mobile-back');
const mobileMenu = document.querySelector('.header__mobile');

humburger.addEventListener('click', () => {
  humburger.classList.toggle('close');
  mobileBack.classList.toggle('show-menu');
  mobileMenu.classList.toggle('show-menu');
})