const mainNav = document.querySelector('.navigation');
const mainNavToggle = document.querySelector('.navigation__toggle');
const mainNavList = document.querySelector('.navigation__list');

mainNav.classList.remove('navigation--no-js');

mainNavToggle.addEventListener('click', () => {
  mainNavList.classList.toggle('navigation__list--opened');
  mainNavToggle.classList.toggle('navigation__toggle--opened');
});
