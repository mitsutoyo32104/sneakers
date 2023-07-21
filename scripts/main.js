document.addEventListener('DOMContentLoaded', function() {
    // navigation.openをtoggle
    new NavMenu;

    // titleの文字をspan.charで分割
    new TextAnimation('.animate-title');

    // interseciton Observerへ登録するcallback
    const addInview = function(el) {
        el.classList.add('inview');
    }

    // instersection Observerへの登録
    new ScrollObserver('.appear', addInview);
    new ScrollObserver('.animate-title', addInview);
});


