// let navMain = document.querySelector('.main-nav');
// let navToggle = document.querySelector('.main-nav__toggle');

// navMain.classList.remove('main-nav--nojs');

// navToggle.addEventListener('click', function () {
//   if (navMain.classList.contains('main-nav--closed')) {
//     navMain.classList.remove('main-nav--closed');
//     navMain.classList.add('main-nav--opened');
//   } else {
//     navMain.classList.add('main-nav--closed');
//     navMain.classList.remove('main-nav--opened');
//   }
// });

const button = document.querySelector('.main-nav__toggle'); // находим кнопку
const nav = document.querySelector('.menu-nav'); // находим навигацию
const closedClass = 'menu-nav--closed'; // класс, который будем добавлять или удалять с навигации

button.addEventListener('click', () => { // слушаем клике на кнопке
  nav.classList.toggle(closedClass); // Как только на кнопке произойдёт клик у навигации смениться класс main-nav--closed
});
