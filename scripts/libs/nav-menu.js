// Vanilla JS
class NavMenu {
    constructor() {
        this.header = document.querySelector('header');
        this.trigger = document.querySelector('.menu-icon');
        this._addEvent();
    }

    _addEvent() {
        this.trigger.addEventListener('click', this._toggleInview.bind(this));
    }

    _toggleInview() {
        this.header.classList.toggle('inview');
    }
}

new NavMenu;



// JQuery
// class NavMenu {
//     constructor() {
//         this.header = $('header');
//         this.trigger = $('.menu-icon');
//         this._addEvent();
//     }

//     _addEvent() {
//         this.trigger.click(this._toggleInview.bind(this));
//     }

//     _toggleInview() {
//         this.header.toggleClass('inview');
//     }
// }

// new NavMenu;