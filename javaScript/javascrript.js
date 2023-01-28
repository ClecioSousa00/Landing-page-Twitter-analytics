let menuIcon = document.querySelector('#icon-btn')
let menuMobile = document.querySelector('.hidden')

menuIcon.addEventListener('click',()=>{
    if(menuMobile.style.display == 'block'){
        menuMobile.style.display = 'none'
    }else{
        menuMobile.style.display = 'block'
    }
})