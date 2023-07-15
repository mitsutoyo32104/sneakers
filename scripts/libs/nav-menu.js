// Vanilla JS
class NavMenu {
    constructor() {
        this.trigger = document.querySelector('.nav__icon');
        this.target = document.querySelector('header');
        this._addEvent();
    }

    _addEvent() {
        this.trigger.addEventListener('click', this._toggleInview.bind(this));
    }

    _toggleInview() {
        this.target.classList.toggle('inview');
    }
}

new NavMenu;

// JQuery
// class NavMenu {
//     constructor() {
//         this.trigger = $('.nav__icon');
//         this.target = $('header');
//         this._addEvent();
//     }

//     _addEvent() {
//         this.trigger.click(this._toggleInview.bind(this));
//     }

//     _toggleInview() {
//         this.target.toggleClass('inview');
//     }
// }

// new NavMenu;