const menuToggle = document.getElementById('menu-toggle');
const closeMenu = document.getElementById('close-menu');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.add('show');
  menuToggle.classList.add('hide');
  closeMenu.classList.add('show');
});

closeMenu.addEventListener('click', () => {
  navbar.classList.remove('show');
  menuToggle.classList.remove('hide');
  closeMenu.classList.remove('show');
});
