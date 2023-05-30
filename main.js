const desktop_menu = document.querySelector('.desktop-menu');
const navbar_email = document.querySelector('.navbar-email');

navbar_email.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    desktop_menu.classList.toggle('inactive');
}