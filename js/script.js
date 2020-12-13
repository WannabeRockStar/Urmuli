const swiper = new Swiper('.swiper-container', {
    loop: true,
    speed: 600,
    effect: 'fade',
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true
    },

    autoplay: {
        delay: 6500
    },

    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
    }
})

const menuSwiper = new Swiper('.menu-slider', {
    
    freeMode: false,
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    },
    slidesPerView: 1,
    spaceBetween: 30,

    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
    }
})



swiper.on('slideChangeTransitionStart', function () {
      console.log("ON CHANGE", swiper.activeIndex)
      getTextEffect()

});

function getTextEffect() {
    
    const slideTitle = document.getElementsByClassName('slide-title')
    const slideText = document.getElementsByClassName('slide-subtitle')
      for(let title of slideTitle) title.classList.remove('active')
      for(let text of slideText) text.classList.remove('active')
      slideTitle[swiper.activeIndex].classList.add('active')
      slideText[swiper.activeIndex].classList.add('active')
    
}

getTextEffect()


const menuBox = document.getElementsByClassName('menu-box')
const prevBtn = document.getElementById('prev-btn')
const nextBtn = document.getElementById('next-btn')

let sliderCounter = {
    num: 0,
    num2: 3
}

// function initSlider() {
//     for(let i = 0; i < menuBox.length; i++) {
//         menuBox[i].classList.add('d-none')
//         menuBox[i].classList.remove('active-menu')

//         if(i >= sliderCounter.num && i < sliderCounter.num2) {
//             menuBox[i].classList.remove('d-none')
//             setTimeout(() => {menuBox[i].classList.add('active-menu')}, 300 * i)
//             console.log(menuBox[i])
//         }
//     }
// }

// initSlider()

// nextBtn.addEventListener('click', () => {
//     sliderCounter.num += 3
//     sliderCounter.num2 += 3

//     if(sliderCounter.num2 > 6) {
//         sliderCounter.num = 0
//         sliderCounter.num2 = 3
//     }
//     initSlider()

//     console.log(sliderCounter)
    
// })

// prevBtn.addEventListener('click', () => {
//     sliderCounter.num -= 3
//     sliderCounter.num2 -= 3
//     if(sliderCounter.num2 === 0) {
//         sliderCounter.num = menuBox.length - 3
//         sliderCounter.num2 = menuBox.length
//     }
//     initSlider()
//     console.log(sliderCounter)
    
// })

