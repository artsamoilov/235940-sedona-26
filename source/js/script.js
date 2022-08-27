const mainNav = document.querySelector('.navigation');
const mainNavToggle = document.querySelector('.navigation__toggle');
const mainNavList = document.querySelector('.navigation__list');
const videoContainer = document.querySelector('.presentation__content');
const videoPlayButton = document.querySelector('.presentation__play-button');
const video = document.querySelector('.presentation__video');

mainNav.classList.remove('navigation--no-js');

mainNavToggle.addEventListener('click', () => {
  mainNavList.classList.toggle('navigation__list--opened');
  mainNavToggle.classList.toggle('navigation__toggle--opened');
});

videoContainer && videoContainer.addEventListener('click', () => {
  videoPlayButton.classList.contains('presentation__play-button--pause') ? video.pause() : video.play();
  videoPlayButton.classList.toggle('presentation__play-button--pause');
});
