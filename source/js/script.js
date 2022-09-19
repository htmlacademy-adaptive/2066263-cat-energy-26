let navMain = document.querySelector('.menu-nav');
let navToggle = document.querySelector('.page-header__toggle');

navMain.classList.remove('page-header--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('page-header--closed')) {
    navMain.classList.remove('page-header--closed');
    navMain.classList.add('page-header--opened');
  } else {
    navMain.classList.add('page-header--closed');
    navMain.classList.remove('page-header--opened');
  }
});

// const button = document.querySelector('.menu-nav__toggle'); // находим кнопку
// const nav = document.querySelector('.menu-nav'); // находим навигацию
// const closedClass = 'menu-nav--closed'; // класс, который будем добавлять или удалять с навигации

// button.addEventListener('click', () => { // слушаем клике на кнопке
//   nav.classList.toggle(closedClass); // Как только на кнопке произойдёт клик у навигации смениться класс menu-nav--closed
// });
