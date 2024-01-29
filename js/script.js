$(document).ready(function(){
    $(function(){
        $('.minimized').click(function(event) {
            var i_path = $(this).attr('src');
            $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
            $('#magnify').css({
                left: ($(document).width() - $('#magnify').outerWidth())/2,
                top: ($(window).height() - $('#magnify').outerHeight())/2
            });
            $('#overlay, #magnify').fadeIn('fast');
        });

        $('body').on('click', '#close-popup, #overlay', function(event) {
            event.preventDefault();
            $('#overlay, #magnify').fadeOut('fast', function() {
                $('#close-popup, #magnify, #overlay').remove();
            });
        });
    });

})

$('a[href^="#"]').click(function(){
    let anchor = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(anchor).offset().top
    }, 1000);
});
$(document).ready(function () {
    $('.polygon--AKTrX').click(function () {
        var polygonId = $(this).attr('id');
        $('.general__place--img img').attr('src', 'img/' + polygonId + '.png');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    var layoutPoints = document.querySelectorAll('.layout__point');
    layoutPoints.forEach(function (point) {
        point.addEventListener('click', function () {
            var pointId = point.id;
            var photoUrls = getPhotoUrlsByPointId(pointId);
            updateSwiperSlides(photoUrls);
            document.getElementById('myModal').style.display = 'flex';
        });
    });


    document.getElementById('myModal').addEventListener('click', function (event) {
        if (event.target === this) {
            this.style.display = 'none';
        }
    });

    function getPhotoUrlsByPointId(pointId) {
        switch (pointId) {
            case 'kitchen':
                return ['img/layout.png', 'img/test5.png', 'img/layout.png'];
            case 'living_room':
                return ['img/test5.png', 'img/layout.png', 'img/test5.png'];
            case 'pantry':
                return ['img/layout.png', 'img/layout.png', 'img/layout.png'];
            case 'bedroom':
                return ['img/test5.png', 'img/layout.png', 'img/test5.png'];
            case 'bathroom':
                return ['img/layout.png', 'img/test5.png', 'img/layout.png'];
            default:
                return [];
        }
    }

    function updateSwiperSlides(photoUrls) {
        mySwiper.removeAllSlides();
        photoUrls.forEach(function (url) {
            mySwiper.addSlide(0, '<div class="swiper-slide"><img src="' + url + '" ></div>');
        });
        mySwiper.update();
    }
});