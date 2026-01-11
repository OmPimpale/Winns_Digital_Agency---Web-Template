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

    const counterUp = window.counterUp.default

    const callback = entries => {
        entries.forEach(entry => {
            const el = entry.target
            if (entry.isIntersecting && !el.classList.contains('is-visible')) {
                counterUp(el, {
                    duration: 1500,
                    delay: 16,
                })
                el.classList.add('is-visible')
            }
        })
    }

    const IO = new IntersectionObserver(callback, { threshold: 1 })

    const el = document.querySelectorAll('.counter');

    for (let count = 0; count < el.length; count++) {
        IO.observe(el[count])
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});