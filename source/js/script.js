let navMain = document.querySelector('.menu-nav');
let navToggle = document.querySelector('.menu-nav__toggle');

navMain.classList.remove('menu-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('menu-nav--closed')) {
    navMain.classList.remove('menu-nav--closed');
    navMain.classList.add('menu-nav--opened');
  } else {
    navMain.classList.add('menu-nav--closed');
    navMain.classList.remove('menu-nav--opened');
  }
});

// const button = document.querySelector('.menu-nav__toggle'); // находим кнопку
// const nav = document.querySelector('.menu-nav'); // находим навигацию
// const closedClass = 'menu-nav--closed'; // класс, который будем добавлять или удалять с навигации

// button.addEventListener('click', () => { // слушаем клике на кнопке
//   nav.classList.toggle(closedClass); // Как только на кнопке произойдёт клик у навигации смениться класс menu-nav--closed
// });
