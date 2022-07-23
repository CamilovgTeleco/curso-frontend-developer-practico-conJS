const menuEmail = document.querySelector('.navbar-email')
const desktopMenu=document.querySelector('.desktop-menu')

const menuHamIcom = document.querySelector('.menu')
const menuMobile= document.querySelector('.mobile-menu')

const btnShoppingCart = document.querySelector('.navbar-shopping-cart')
const productDetailShopCar = document.querySelector('.product-detail')

const cardsContainer = document.querySelector('.cards-container')

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





















