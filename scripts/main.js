document.addEventListener('DOMContentLoaded', function() {
    new NavMenu;

    const cbProcess = function(el) {
        el.classList.add('inview');
    }
    new ScrollObserver('.appear', cbProcess);
});


