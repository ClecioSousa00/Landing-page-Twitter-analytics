let menuIcon = document.querySelector('#icon-btn')
let menuMobile = document.querySelector('.hidden')

let like1 = document.querySelector('#logo-like1')
let like2 = document.querySelector('#logo-like2')
let like3 = document.querySelector('#logo-like3')
let numberLike1 = document.querySelector('#number-like1')
let numberLike2 = document.querySelector('#number-like2')
let numberLike3 = document.querySelector('#number-like3')



menuIcon.addEventListener('click',()=>{
    if(menuMobile.style.display == 'block'){
        menuMobile.style.display = 'none'
    }else{
        menuMobile.style.display = 'block'
    }
})

like1.addEventListener('click',()=>{
    numberLike1.innerHTML = `${Number(numberLike1.textContent) +1}`
})
like1.addEventListener('touchstart',()=>{
    numberLike1.innerHTML = `${Number(numberLike1.textContent) +1}`
})


like2.addEventListener('click',()=>{
    numberLike2.innerHTML = `${Number(numberLike2.textContent) +1}`
})
like2.addEventListener('touchstart',()=>{
    numberLike2.innerHTML = `${Number(numberLike2.textContent) +1}`
})


like3.addEventListener('click',()=>{
    numberLike3.innerHTML = `${Number(numberLike3.textContent) +1}`
})
like3.addEventListener('touchstart',()=>{
    numberLike3.innerHTML = `${Number(numberLike3.textContent) +1}`
})

