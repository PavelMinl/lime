document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper(".build_swiper", {
        spaceBetween: 10,
        slidesPerView: 2,
        freeMode: true,
        watchSlidesProgress: true,

    });
    var swiper2 = new Swiper(".build_swiper--2", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper(".layout_swiper", {
        spaceBetween: 10,
        slidesPerView: 2,
        freeMode: true,
        watchSlidesProgress: true,

    });
    var swiper2 = new Swiper(".layout_swiper--2", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper(".layout_photo-swiper", {
        effect: "cards",
        cardsEffect: {                  // added
            perSlideOffset: 10,         // added(slide gap(px)
            perSlideRotate: 0,         // added(Rotation angle of second and subsequent slides
            rotate: true,               // added(Rotation presence of second and subsequent slides(true/false)
            slideShadows: false,        // added(Shadow presence of second and subsequent slides(true/false)
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

    });
});