$(document).ready(function () {
    $('.owl-one').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsiveClass: true,
        navigation: false,
        dots: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4,
                nav: false,
                loop: true
            },
            2500: {
                items: 6,
                nav: false,
                loop: true
            }
        }
    });


    $('.owl-two').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2500,
        autoplayHoverPause: true,
        responsiveClass: true,
        dots: false,
        navigation: false,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: false,
                loop: true
            },
            2500: {
                items: 6,
                nav: false,
                loop: true
            }
        }
    });
});
