const desktop_menu = document.querySelector('.desktop-menu');
const navbar_email = document.querySelector('.navbar-email');

const triline_menu = document.querySelector('.menu');
const mobile_menu = document.querySelector('.mobile-menu');

const shopping_cart = document.querySelector('.navbar-shopping-cart');
const product_detail = document.querySelector('.product-detail');

const cardsContainer = document.querySelector('.cards-container');

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

/* 
<div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div> 
*/

const producList = [];

producList.push({
    name: 'Bici',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',   
})
producList.push({
    name: 'Carro',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',   
})
producList.push({
    name: 'Tele',
    price: 450,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',   
})

function renderProducts(array)
{
    for (product of producList)
{
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    
    const imgProduct = document.createElement('img');
    imgProduct.setAttribute('src', product.image);
    
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
    
    const productInfoDiv = document.createElement('div');
    
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    
    const productName = document.createElement('p');
    productName.innerText = product.name;
    
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName );
    
    const productInfoFigure = document.createElement('figure');
    
    const imgFigure = document.createElement('img');
    imgFigure.setAttribute('src', './icons/bt_add_to_cart.svg');
    
    productInfoFigure.appendChild(imgFigure);
    
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
    
    productCard.appendChild(imgProduct);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
}
}

renderProducts(producList);