var swiper = new Swiper('.slide-hero__swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
        el: '.slider-images .swiper-pagination',
        clickable: true
    }
})

var tripSwiper = new Swiper('.trips-slide', {
    slidesPerView: 4,
    loop: true,
    spaceBetween: 30,
    centeredSlides: false,
    grabCursor: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: true,
        pauseOnMouseEnter: true
    },
    breakpoints: {
        320: {
            slidesPerView: 1.5,
            spaceBetween: 16
        },
        481: {
            slidesPerView: 2,
            spaceBetween: 32
        },
        769: {
            slidesPerView: 2.5,
            spaceBetween: 32
        },
        993: {
            slidesPerView: 4,
            spaceBetween: 32
        }
    }
})

const trip = document.querySelector('.trips-slide')
;['mouseenter', 'mouseleave'].forEach(useEvent => {
    trip.addEventListener(useEvent, handlePlay)
})
function handlePlay(event) {
    if (event.type === 'mouseenter') {
        this.swiper.autoplay.stop()
    } else if (event.type === 'mouseleave') {
        this.swiper.autoplay.start()
    }
}
var toursSwiper = new Swiper('.tours-slide__load', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
})

var toursSwiper = new Swiper('.mySwiperTours', {
    breakpoints: {
        360: {
            slidesPerView: 1.5,
            spaceBetween: 16
        },
        390: {
            slidesPerView: 1.5,
            spaceBetween: 16
        },
        530: {
            slidesPerView: 1.5,
            spaceBetween: 16
        },
        660: {
            slidesPerView: 2,
            spaceBetween: 32
        },
        768: {
            slidesPerView: 2.5,
            spaceBetween: 32
        },
        990: {
            slidesPerView: 3.3,
            spaceBetween: 32
        },
        1120: {
            slidesPerView: 1.5,
            spaceBetween: 32
        },
        1150: {
            slidesPerView: 2.2,
            spaceBetween: 32
        },
        1366: {
            slidesPerView: 2.5,
            spaceBetween: 32,
            centeredSlides: false
        },
        1440: {
            slidesPerView: 3.2,
            spaceBetween: 32
        }
    },
    slidesPerView: 3,
    loop: true,
    spaceBetween: 30,
    centeredSlides: false,
    grabCursor: true
})
