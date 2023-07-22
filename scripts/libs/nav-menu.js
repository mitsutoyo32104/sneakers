// Vanilla JS
class NavMenu {
    constructor() {
        this.DOM = {};
        this.DOM.trigger = document.querySelector('.nav__icon');
        this.DOM.cover = document.querySelector('.nav__cover');
        this.DOM.navItem = document.querySelectorAll('.nav__item');
        this.DOM.target = document.querySelector('header');
        this._addEvent();
    }

    _addEvent() {this
        this.DOM.trigger.addEventListener('click', this._toggleOpen.bind(this));

        // nav__coverをclickしたらnavを隠す
        this.DOM.cover.addEventListener('click', this._toggleOpen.bind(this));

        // sns以外のlinkをclickしたらnavを隠す
        this.DOM.navItem.forEach(function(navItem) {
            if(!navItem.classList.contains('sns')) {
                navItem.addEventListener('click', this._toggleOpen.bind(this));
            }
        }.bind(this));
    }

     // headerに.inviewを付け外ししてnavを表示・非表示
    _toggleOpen() {
        this.DOM.target.classList.toggle('open');
    }
}

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