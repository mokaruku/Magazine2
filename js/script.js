//ボタン取得
const navToggle = document.querySelector('.header__nav-toggle');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('open');
})

window.addEventListener('load', () => {
  document.body.classList.add('loaded');
})