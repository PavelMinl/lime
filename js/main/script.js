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
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 0,
        grabCursor: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

