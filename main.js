const menuEmail = document.querySelector('.navbar-email')
const desktopMenu=document.querySelector('.desktop-menu')

const menuHamIcom = document.querySelector('.menu')
const menuMobile= document.querySelector('.mobile-menu')

menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcom.addEventListener('click', toggleBtnHamburguesa)

function toggleDesktopMenu(){
    //Método corto para mostrar/ocultar desktop-menu
    desktopMenu.classList.toggle('inactive')

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
    menuMobile.classList.toggle('inactive')
}


















