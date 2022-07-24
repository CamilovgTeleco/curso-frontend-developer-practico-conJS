const menuEmail = document.querySelector('.navbar-email')
const desktopMenu=document.querySelector('.desktop-menu')

const productDetailCloseIcon = document.querySelector('.product-detail-close')

const menuHamIcom = document.querySelector('.menu')
const menuMobile= document.querySelector('.mobile-menu')

const btnShoppingCart = document.querySelector('.navbar-shopping-cart')
const productDetailShopCart = document.querySelector('#shoppingCartContainer')
const productDetailContainer = document.querySelector('#productDetail')
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcom.addEventListener('click', toggleBtnHamburguesa)
btnShoppingCart.addEventListener('click', toggleBtnShopCar)
productDetailCloseIcon.addEventListener('click', closeProductDetailAside)

function toggleDesktopMenu(){
    const isProductDetailShopCarClosed=productDetailShopCart.classList.contains('inactive')
    //Método corto para mostrar/ocultar desktop-menu
    desktopMenu.classList.toggle('inactive')

    if(!isProductDetailShopCarClosed){
        productDetailShopCart.classList.add('inactive')
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

/*MOBILE MENU*/ 
function toggleBtnHamburguesa(){
    /*productDetailShopCart*/
    const isProductDetaolShopCarClosed=productDetailShopCart.classList.contains('inactive')
    menuMobile.classList.toggle('inactive')
    if(!isProductDetaolShopCarClosed){
        productDetailShopCart.classList.add('inactive')
    }
    closeProductDetailAside()
}

function toggleBtnShopCar(){
    const isMenuMobileClose=menuMobile.classList.contains('inactive')
    const isDesktopMenuClosed=desktopMenu.classList.contains('inactive')

    const isProductDetail=productDetailContainer.classList.contains('inactive')

    productDetailShopCart.classList.toggle('inactive')
    if(!isMenuMobileClose){
        menuMobile.classList.add('inactive')
    }

    if(!isDesktopMenuClosed){
       desktopMenu.classList.add('inactive')
    }

    if(!isProductDetail){
        productDetailContainer.classList.add('inactive')
     }



}

/*Integración código clase6.html*/ 

const productList=[];

productList.push({
    name:"Bike",
    price:120, 
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push({
    name:"Pantalla",
    price:220, 
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

productList.push({
    name:"Computador",
    price:500, 
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
})

for (product of productList){
    const productCard= document.createElement('div')
    productCard.classList.add('product-card')

    const img = document.createElement('img')
    img.setAttribute('src',product.image)
    img.addEventListener('click', openProductDetailAside)

    const productInf= document.createElement('div')
    productInf.classList.add('product-info')


    const productInfoDiv=document.createElement('div')
    
    const productPrice=document.createElement('p')
    productPrice.innerHTML = '$' + product.price
    

    const productName=document.createElement('p')
    productName.innerText=product.name
    
    const productInfoFigure=document.createElement('figure')
    
    const productImgCard=document.createElement('img')
    productImgCard.setAttribute('src', './icons/bt_add_to_cart.svg')

    productInfoFigure.append(productImgCard)
    productInfoDiv.append(productPrice)
    productInfoDiv.append(productName)
    productInf.append(productInfoDiv)

    productCard.append(img)
    productCard.append(productInf)
    productInf.append(productInfoFigure)

    cardsContainer.append(productCard)
}


function openProductDetailAside(){
    productDetailContainer.classList.remove('inactive')
    const isProductDetailShopCart=productDetailShopCart.classList.contains('inactive')

    if (!isProductDetailShopCart){
        productDetailShopCart.classList.add('inactive')
    }
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive')
}





















