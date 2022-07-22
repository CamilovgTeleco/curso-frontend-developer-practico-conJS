const menuEmail = document.querySelector('.navbar-email')
const desktopMenu=document.querySelector('.desktop-menu')

const menuHamIcom = document.querySelector('.menu')
const menuMobile= document.querySelector('.mobile-menu')

const btnShoppingCart = document.querySelector('.navbar-shopping-cart')
const productDetailShopCar = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcom.addEventListener('click', toggleBtnHamburguesa)
btnShoppingCart.addEventListener('click', toggleBtnShopCar)

function toggleDesktopMenu(){
    const isProductDetailShopCarClosed=productDetailShopCar.classList.contains('inactive')
    //Método corto para mostrar/ocultar desktop-menu
    desktopMenu.classList.toggle('inactive')

    if(!isProductDetailShopCarClosed){
        productDetailShopCar.classList.add('inactive')
    }

    //Método largo para mostrar/ocultar desktop-menu
    // let muestra= desktopMenu.getAttribute('class')
    // let arreglo=[];
    // let palabra=""
    // for(let i=0;i<muestra.length;i++){
    //     if(muestra[i]==" "){
    //         arreglo.push(palabra)
    //         palabra=""
    //     }else{
    //         palabra+=muestra[i]
    //         if(i==muestra.length-1){
    //             arreglo.push(palabra)
    //         }
    //     }
    // }
    // console.log(arreglo)
    // if(arreglo.indexOf('inactive')!=-1){
    //     desktopMenu.classList.remove('inactive')
    //     console.log("pongo")
    // }else{
    //     desktopMenu.classList.add('inactive')
    //     console.log("pongo")
    // }
}

function toggleBtnHamburguesa(){
    const isProductDetaolShopCarClosed=productDetailShopCar.classList.contains('inactive')
    menuMobile.classList.toggle('inactive')
    if(!isProductDetaolShopCarClosed){
        productDetailShopCar.classList.add('inactive')
    }

}

function toggleBtnShopCar(){
    const isMenuMobileClose=menuMobile.classList.contains('inactive')
    const isDesktopMenuClosed=desktopMenu.classList.contains('inactive')
    productDetailShopCar.classList.toggle('inactive')
    if(!isMenuMobileClose){
        menuMobile.classList.add('inactive')
    }

    if(!isDesktopMenuClosed){
       desktopMenu.classList.add('inactive')
    }
}




















