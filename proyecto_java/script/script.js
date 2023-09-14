const menuEmail = document.querySelector('.navbar-email'); 
const desktopMenu = document.querySelector('.desktop-menu'); 
// menu hambueguesa
const menuHamIcon = document.querySelector('.menu');
const mobileMenu  = document.querySelector('.mobile-menu');
// 
menuEmail.addEventListener('click', toogleDesktopMenu);
menuHamIcon.addEventListener('click', toogleHamMenu);

function toogleDesktopMenu(){
    desktopMenu.classList.toggle('inactive')
}
// `para ver el menu hamburguesa
function toogleHamMenu(){
    mobileMenu.classList.toggle('inactive')
}