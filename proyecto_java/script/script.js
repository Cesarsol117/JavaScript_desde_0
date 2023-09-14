const menuEmail = document.querySelector('.navbar-email'); 
const desktopMenu = document.querySelector('.desktop-menu'); 
// menu hambueguesa
const menuHamIcon = document.querySelector('.menu');
const mobileMenu  = document.querySelector('.mobile-menu');
// 
// aside
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const menuAside = document.querySelector('.product-detail');
// 

menuEmail.addEventListener('click', toogleDesktopMenu);
menuHamIcon.addEventListener('click', toogleHamMenu);
menuCarrito.addEventListener('click', toogleCarritoAside);

function toogleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    menuAside.classList.add('inactive');
}
// `para ver el menu hamburguesa
function toogleHamMenu(){
    mobileMenu.classList.toggle('inactive');
    menuAside.classList.add('inactive');
}
// para el carrito de compras
function toogleCarritoAside(){
    menuAside.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive')
}