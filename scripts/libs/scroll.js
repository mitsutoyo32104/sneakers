// ページ内リンクへの自動スクロール
class Scroll {
    constructor(trigger) {
        this.links = document.querySelectorAll(trigger);
        this._addEvent();
    }

    // linkにeventの設定
    _addEvent() {
        this.links.forEach(function(link) {
            link.addEventListener("click", function(e) {
                // 最新ブラウザでサポート。細かい位置調整は不可
                // this._scrollIntoView(e.target);
    
                // 特定の位置へスクロール
                this._scrollToPosition(e.target);
            }.bind(this));
        }.bind(this));
    }

    _scrollIntoView(trigger) {
        const id = trigger.getAttribute('id');
        const el = document.querySelector(id);
    
        el.scrollIntoView({
            block: 'start', 
            inline: 'start',  
            behavior: "smooth", 
        });
    }

    _scrollToPosition(trigger) {
        // id属性を取得
        const id = trigger.getAttribute('id');
    
        // Link先DOM取得
        const target = document.querySelector(id);
    
        // ブラウザ画面(viewport)から見た要素の座標を取得。rect = 長方形
        const rect = target.getBoundingClientRect();
    
        // 要素の座標とページ全体の座標
        // scrollX/Y(ページでスクロールしているpxel数を取得) = window.pageX/YOffset(ScrollX/Yのエイリアス)
        const scrollPosition = rect.top + window.scrollY;
    
        // スクロールを実行
        window.scrollTo({
            top: scrollPosition - 80,
            left: 0,
            behavior: 'smooth'
          })
    }
}

