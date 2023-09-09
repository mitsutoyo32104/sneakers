document.addEventListener('DOMContentLoaded', function() {
    new Main;
});

class Main {
    constructor() {
        this._init();
        this._ScrollObserverInit();
    }

    _init() {
        new ExtensionMainvisual;
        new NavMenu;
        new HeroSlider;
        new TextAnimation('.animate-title');
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