const menuEmail = document.querySelector('.navbar-email'); 
const desktopMenu = document.querySelector('.desktop-menu'); 
// menu hambueguesa
const menuHamIcon = document.querySelector('.menu');
const mobileMenu  = document.querySelector('.mobile-menu');
// 
// aside
const menuCarrito = document.querySelector('.navbar-shopping-cart');
const menuAside = document.querySelector('#shopping-cart-container');
// 
const cardContainer = document.querySelector('.cards-container'); // 0
// 
const productDetailContainer = document.querySelector('#productDetail');
const botonCloseProductDetail = document.querySelector('.product-detail-close');


menuEmail.addEventListener('click', toogleDesktopMenu);
menuHamIcon.addEventListener('click', toogleHamMenu);
menuCarrito.addEventListener('click', toogleCarritoAside);
botonCloseProductDetail.addEventListener('click', closeProductDetailAside);

function toogleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    menuAside.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}
// `para ver el menu hamburguesa
function toogleHamMenu(){
    mobileMenu.classList.toggle('inactive');
    menuAside.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}
// para el carrito de compras
function toogleCarritoAside(){
    menuAside.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
}
// funcion para abrir el detalle del producto
function openDetailproductAside(){
    productDetailContainer.classList.remove('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    menuAside.classList.add('inactive');
}
// funcion para cerrar el detalle del producto
function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}


// lista de productos a mostrar, se cra una lista vacia
// y luego se le pushea cada objeto...

const productList = [];
productList.push({
    productName:'Bike',
    priceProduct: 120,
    imageProduct:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

})
productList.push({
    productName:'Pantalla',
    priceProduct: 320,
    imageProduct:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'

})
productList.push({
    productName:'Xbox',
    priceProduct: 520,
    imageProduct:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
/* 

*/
})

function renderProducts(arrayElements){
    // creamos un for para rrecorrer la lista de los elementos agregados
    for (poduct of arrayElements) {
        // creamos elemento por elemneto del html ----------------------------
            const productCard = document.createElement('div');//1
            productCard.classList.add('product-card');// 
        
            // ahora creamos una imagen
            const productImg = document.createElement('img'); //2
            // poduct es igual a los atributos del objeto
            productImg.setAttribute('src', poduct.imageProduct);
            productImg.addEventListener('click', openDetailproductAside);

            // Ahora creamos la clase product crad
            const infoProduct = document.createElement('div');//3
            infoProduct.classList.add('product-info');
            
            const productInfoDiv = document.createElement('div');//4
        
            const productPrice = document.createElement('p');//5
            productPrice.innerText = '$' + poduct.priceProduct;
            const nameProduct  = document.createElement('p');//6
            nameProduct.innerText = poduct.productName;
        
            const figureProduct = document.createElement('figure'); //7
            const imgFigure = document.createElement('img'); //8
            imgFigure.setAttribute('src', '../media/icons/bt_add_to_cart.svg');
        // fin de creacion de los elementos ---------------------------------
        // inicio de metodo para agregar ____________________________________
            //llamamos los div y todo lo que creamos podria ser por orden pero vamos de abajo hacia arriba
            //metemos 8 en 7
            figureProduct.appendChild(imgFigure);
            // ahora metemos 5 y 6 en 4
            productInfoDiv.append(productPrice, nameProduct);
            // metemos 4 y 7 en 3
            infoProduct.append(productInfoDiv, figureProduct);
            //metemos 3 y 2 en 1
            productCard.append(productImg, infoProduct);
            // metemos 1 en 0
            cardContainer.appendChild(productCard);
        
    }
}
// llamos la funcion
renderProducts(productList);