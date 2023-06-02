const desktop_menu = document.querySelector('.desktop-menu');
const navbar_email = document.querySelector('.navbar-email');

const triline_menu = document.querySelector('.menu');
const mobile_menu = document.querySelector('.mobile-menu');

const shopping_cart = document.querySelector('.navbar-shopping-cart');
const product_detail = document.querySelector('.product-detail');

navbar_email.addEventListener('click', toggleDesktopMenu);
triline_menu.addEventListener('click', toggleMobileMenu);
shopping_cart.addEventListener('click', toggleProductDetail);


function toggleDesktopMenu(){
    const isProductDetailOpen = !product_detail.classList.contains('inactive');
    if(isProductDetailOpen){
        product_detail.classList.add('inactive');
    }
    desktop_menu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isProductDetailOpen = !product_detail.classList.contains('inactive');
    if(isProductDetailOpen){
        product_detail.classList.add('inactive');
    }

    mobile_menu.classList.toggle('inactive');
}

function toggleProductDetail(){
    const isMobileMenuOpen = !mobile_menu.classList.contains('inactive');
    const isDesktopMenuOpen = !desktop_menu.classList.contains('inactive');
    if(isMobileMenuOpen){
        mobile_menu.classList.add('inactive');
    }
    if(isDesktopMenuOpen){
        desktop_menu.classList.add('inactive');
    }

    product_detail.classList.toggle('inactive');
}