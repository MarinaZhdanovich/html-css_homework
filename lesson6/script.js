const menuActive = document.querySelector('.menu');
const burger = document.querySelector('.btnmenu');

function toggleMenu() {
  menuActive.classList.toggle('hidemenu');
}

burger.addEventListener('click', toggleMenu);
