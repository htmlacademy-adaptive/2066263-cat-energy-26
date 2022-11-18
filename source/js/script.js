let navMain = document.querySelector('.menu-nav');
let navToggle = document.querySelector('.page-header__toggle');

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
