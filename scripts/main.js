document.addEventListener('DOMContentLoaded', function() {
    const cbProcess = function(el) {
        el.classList.add('inview');
    }
    new ScrollObserver('.appear', cbProcess);
});


