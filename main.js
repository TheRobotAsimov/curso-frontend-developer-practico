const desktop_menu = document.querySelector('.desktop-menu');
const navbar_email = document.querySelector('.navbar-email');
const triline_menu = document.querySelector('.menu');
const mobile_menu = document.querySelector('.mobile-menu');

navbar_email.addEventListener('click', toggleDesktopMenu);
triline_menu.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu(){
    desktop_menu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    mobile_menu.classList.toggle('inactive');
}