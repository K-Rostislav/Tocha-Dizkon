function testWebP(callback){
    let webP = new Image();
    webP.onload = webP.onerror = function (){
        callback(webP.height == 2)
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}
testWebP(function(support){
    if(support == true){
        document.querySelector('html').classList.add('webp');
    } else {
        document.querySelector('html').classList.add('no-webp');
    }
});
//=============================================================================================================================================
// buttons ===================================================
const btns = document.querySelectorAll('.violet-button, .pink-button')

for (let item of btns) {
    item.addEventListener('mouseover', (e) => {
        const span = document.createElement('span')
        span.classList.add('hover')
        Object.assign(span.style, {
            'top': `${e.clientY - item.getBoundingClientRect().top}px`,
            'left': `${e.clientX - item.getBoundingClientRect().left - 4}px`,
        })
        item.appendChild(span)
    })
    item.addEventListener('mouseout', (e) => {
        const active = e.target.querySelector('.active')
        if (active) active.remove()
        e.target.querySelector('.hover').remove()
    })
    item.addEventListener('mousedown', (e) => {
        const span = document.createElement('span')
        span.classList.add('active')
        Object.assign(span.style, {
            'top': `${e.clientY - item.getBoundingClientRect().top}px`,
            'left': `${e.clientX - item.getBoundingClientRect().left - 4}px`,
        })
        item.appendChild(span)
        setTimeout(() => {
            span.remove()
        }, 300);
    })
}
// burger ===================================================
const burgerBtn = document.querySelector('.burger-btn')
const burgerBg = document.querySelector('.burger-background')
const burger = document.querySelector('.burger')
const close = document.querySelector('.close')

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.add('burger-btn_active')
    burger.classList.add('burger_active')
    burgerBg.classList.add('burger-background_active')
})
burgerBg.addEventListener('click', () => {
    burgerBtn.classList.remove('burger-btn_active')
    burger.classList.remove('burger_active')
    burgerBg.classList.remove('burger-background_active')
})
close.addEventListener('click', () => {
    burgerBtn.classList.remove('burger-btn_active')
    burger.classList.remove('burger_active')
    burgerBg.classList.remove('burger-background_active')
})
// tocha-animation ===================================================
const tocha = document.querySelector('.tocha')
const tochaSvg = document.querySelector('.tocha__svg')
const email = document.querySelector('.email')
const emailSvg = document.querySelector('.email__svg')

window.addEventListener('scroll', () => {
    let scrollY = window.scrollY
    if (scrollY > tocha.getBoundingClientRect().top + scrollY - 600) {
        tochaSvg.classList.add('tocha__svg_animate')
    }
    if (scrollY > email.getBoundingClientRect().top + scrollY - 500) {
        emailSvg.classList.add('email__svg_animate')
    }
})
// slider ===================================================
new Swiper('.offers__slider', {
    spaceBetween: 30,
    slidesPerView: 3,
    grabCursor: true,

    pagination: {
      el: '.offers__slider-pagination',
      clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        0: {
            slidesPerView: 1,
        }
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
});
new Swiper('.connection__slider', {
    spaceBetween: 170,
    slidesPerView: 3,
    grabCursor: true,

    pagination: {
      el: '.connection__slider-pagination',
      clickable: true,
    },
    breakpoints: {
        1024: {
            spaceBetween: 100,
        },
        768: {
            spaceBetween: 27,
            slidesPerView: 3,
        },
        480: {
            slidesPerView: 2,
        },
        0: {
            spaceBetween: 15,
            slidesPerView: 1.5,
        }
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
});
new Swiper('.comments__slider', {
    spaceBetween: 30,
    slidesPerView: 2,
    grabCursor: true,

    pagination: {
      el: '.comments__slider-pagination',
      clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        480: {
            slidesPerView: 1.5,
        },
        0: {
            slidesPerView: 1,
        }
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
});
// aos ===================================================
AOS.init({
    // Global settings:
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 200, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 500, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});
// validation ===================================================
const form = document.getElementById('form')
const inputBlock = document.querySelector('.input-block')
const input = document.querySelector('.input-block__input')
const btnSubmit = document.querySelector('.email__button')

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault()
    const regex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/

    if (regex.test(input.value)) {
        inputBlock.classList.remove('input-block_error')
        form.submit()
    } else {
        inputBlock.classList.add('input-block_error')
    }
})
