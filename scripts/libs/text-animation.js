class TextAnimation {
    constructor(target) {
        this.DOM = {};
        this.DOM.target = document.querySelectorAll(target);

        // DOMの文字列を配列で保持
        this.strings = this._pushString();

        // 各文字列の各文字を分割して配列で保持
        this.words = this._splitString();

        // 各文字をspan.charで括る
        this.chars = this._bindChar();

        // 各文字列を.charで括ったHTMLに書き換える
        this.chars.forEach(function(char, i) {
            this.DOM.target[i].innerHTML = char;
        }.bind(this));
    }

    _pushString() {
        this.strings = [];

        this.DOM.target.forEach(el => {
            const string = el.textContent;
            this.strings.push(string);
        });

        return this.strings;
    }

    _splitString() {
        this.words = [];

        this.strings.forEach(string => {
            const word = string.split('');
            this.words.push(word);
        });

        return this.words;
    }

    _bindChar() {
        this.chars = [];

        const _this = this;

        this.words.forEach(function(chars) {
            const words = chars.reduce((accu, curr) => {
                return `${accu}<span class="char">${curr}</span>`;
            }, '');

            _this.chars.push(words);
        });

        return this.chars;
    }
}


