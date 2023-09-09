class HeroSlider {
    constructor(options) {
        this.options = Object.assign(this._setDefaultOptions(), options);
        this.swiper = new Swiper(".swiper", this.options);
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
            grabCursor: "true",

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
