const menuEmail = document.querySelector('.navbar-email')
const desktopMenu=document.querySelector('.desktop-menu')

menuEmail.addEventListener('click', toggleDesktopMenu)

function toggleDesktopMenu(){
    //Método corto
    desktopMenu.classList.toggle('inactive')

    //Método largo
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


















