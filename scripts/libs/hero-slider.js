const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    effect: "coverflow",
    speed: "600",
    slidesPerView: 1.5,
    spaceBetween: "0px",
    centeredSlides: "true",

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});

class HeroSlider {
    constructor(el, options) {
        this.swiper = new Swiper(".swiper", options);
        const options = _setDefaultOptions();
    }

    _setDefaultOptions() {
        return {
            // Optional parameters
            direction: "horizontal",
            loop: true,
            effect: "coverflow",
            speed: "600",
            slidesPerView: 1.5,
            spaceBetween: "0px",
            centeredSlides: "true",

            // If we need pagination
            pagination: {
                el: ".swiper-pagination",
            },

            // Navigation arrows
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },

            // And if we need scrollbar
            scrollbar: {
                el: ".swiper-scrollbar",
            },
        };
    }
}
