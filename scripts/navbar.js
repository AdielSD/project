
  const menuToggle = document.querySelector('.menu-toggle');
  const closeMenu = document.querySelector('.close-menu');
  const navbar = document.querySelector('.navbar');

  menuToggle.addEventListener('click', () => {
    navbar.classList.add('show');
    closeMenu.classList.add('show');
    menuToggle.classList.add('hide');
  });

  closeMenu.addEventListener('click', () => {
    navbar.classList.remove('show');
    closeMenu.classList.remove('show');
    menuToggle.classList.remove('hide');
  });

