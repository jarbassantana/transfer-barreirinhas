var swiper = new Swiper('.slide-hero__swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: '.slider-images .swiper-pagination',
        clickable: true
    }
})

var tripSwiper = new Swiper('.trips-slide', {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: false,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    }
    // pagination: {
    //     el: '.recent-trips-container .swiper-pagination',
    //     clickable: true
    // }
})
