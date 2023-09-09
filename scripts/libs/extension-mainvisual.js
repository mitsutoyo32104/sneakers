class ExtensionMainvisual {
    constructor() {
        this.imgs = document.querySelectorAll('.mainvisual__img'); 
        this._addEvent();
    }

    _addEvent() {
        document.addEventListener('scroll', this._changeWitdh.bind(this));
    }

    _changeWitdh() {
        if(window.innerWidth > 658) {
            this.imgs.forEach(img => {
                img.style.width = 100/3 + window.scrollY/10 + '%';
            });
        }
    }
}