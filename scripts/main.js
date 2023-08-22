document.addEventListener('DOMContentLoaded', function() {
    new Main;
});

class Main {
    constructor() {
        this._init();
        this._ScrollObserverInit();
    }

    _init() {
        new NavMenu;
        new TextAnimation('.animate-title');
        new HeroSlider;

        // Link先へのScroll
        new Scroll(".nav__link", "sns");
    };

     // instersection Observerへの登録
    _ScrollObserverInit() {
        new ScrollObserver('.appear', this._addInview.bind(this));
        new ScrollObserver('.animate-title', this._addInview.bind(this));
    }

    // interseciton Observerへ登録するcallback
    _addInview(el) {
        el.classList.add('inview');
    }
    
}