// navigation selectors//
const menuBtn = document.querySelector('.menu');
const nav = document.getElementById('nav');
const closeBtn = document.querySelector('.close');
// prev next selectors//
const prevBtn = document.querySelector('.previous')
const nextBtn = document.querySelector('.next')
const changeImg = document.querySelector('.change');
let prevNext = 1;
// cart selectors
const cartBtn = document.querySelector('.cart');
const cartCon = document.querySelector('.cart-overlay');

// adding cart selectors//
const addToCart = document.querySelector('.btn');
const cart = document.querySelector('.cart');
const cartCheckout = document.querySelector('.added-cart');
const cartEmpty = document.querySelector('.empty');
const allOrders = document.querySelector('.quantity');
const plusBtn = document.querySelector('.plus')
const minusBtn = document.querySelector('.minus');
const iconDotNumber = document.querySelector('.icon-dot');
const deleteorders = document.querySelector('.delete');
 const payment = document.querySelector('.total');
let items = document.querySelector('.item');
let order = 0;

window.addEventListener("DOMContentLoaded" , () => {
    cartCon.classList.add('hidden')
})


addToCart.addEventListener('click', () => {
    if(order <= 0) {
        iconDotNumber.classList.add('icon-hidden');  
        return
    }else {
        iconDotNumber.classList.remove('icon-hidden');
        cartCheckout.classList.remove('hidden');
        iconDotNumber.innerText = order;
    }
    // i remove the event listner for the minus button after pressing adding cart cause you cant decrease item after pressing add to cart//
     minusBtn.removeEventListener('click', minus);
    cartEmpty.classList.add('hidden')
    allOrders.innerText = order
    calculate()
    displayOrder()
})

// cart opening and closing//
cartBtn.addEventListener('click', openCart)

function openCart() {
    cartCon.classList.toggle('hidden')
    if(!iconDotNumber.classList.contains('icon-hidden') > 0) {
        cartEmpty.classList.add('hidden')
        cartCheckout.classList.remove('hidden');

    }else {
        cartEmpty.classList.remove('hidden')
        cartCheckout.classList.add('hidden');
    }
    console.log(typeof(iconDotNumber))
}
deleteorders.addEventListener('click', () => {
    order = 0;
    iconDotNumber.innerText = order;
    allOrders.innerText = order
    payment.innerText = `$${order}`
    iconDotNumber.classList.add('icon-hidden');
     cartEmpty.classList.remove('hidden')
        cartCheckout.classList.add('hidden')

    displayOrder()
})

function calculate() {
   
    const totalPayment = order * 125;
    payment.innerText = `$${totalPayment}`
}

function displayOrder() {
    items.innerText = order
}

plusBtn.addEventListener('click', () => {
    order++
    displayOrder()
})
minusBtn.addEventListener('click', minus)

function minus() {
    if(order <= 0) {
        return
    }else 
    order--
    displayOrder()
}

// open close nav//
menuBtn.addEventListener('click', openNav);
closeBtn.addEventListener('click', closeNav);


// mobile section //
// function on opening nav//
function openNav() {
    nav.classList.add('open-visible');
    if(nav.classList.contains('open-visible')) {
        cartCon.classList.add('hidden')
    }
    cartBtn.removeEventListener('click', openCart)
}
function closeNav() {
    nav.classList.remove('open-visible')
    cartBtn.addEventListener('click', openCart)
}

// next-prev carousel pictures//
prevBtn.addEventListener('click', () => {
    if(prevNext > 1 ){
         prevNext--
    }else {
        return
    }
    changeImg.setAttribute('src', `image-product-${prevNext}.jpg`)
})
nextBtn.addEventListener('click', () => {
    if(prevNext < 4){
         prevNext++
    }else {
        return
    }
    changeImg.setAttribute('src', `image-product-${prevNext}.jpg`)
})

let num = 1;
const prev = document.querySelector('#previous')
const next = document.querySelector('#next')
const change = document.querySelector('#change');
const floatingItems = document.querySelectorAll('.first > li');
const bodyOverlay = document.querySelector('.overlay');
const floatCarousel = document.querySelector('.floating');
const closeBtnCarousel = document.getElementById('close');
floatingItems.forEach(list => {
   list.addEventListener('click', () => {
    console.log(list)
    floatCarousel.style.display = 'flex'
    bodyOverlay.classList.remove('hidden')
   })
})
closeBtnCarousel.addEventListener('click', () => {
    floatCarousel.style.display = 'none'
    bodyOverlay.classList.add('hidden')
})

prev.addEventListener('click', () => {
    if(num > 1 ){
         num--
    }else {
        return
    }
    change.setAttribute('src', `image-product-${num}.jpg`)
})
next.addEventListener('click', () => {
    if(num < 4){
         num++
    }else {
        return
    }
    change.setAttribute('src', `image-product-${num}.jpg`)
})
