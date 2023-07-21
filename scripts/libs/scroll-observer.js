class ScrollObserver {
    constructor(els, cbProcess, options = {}) {
        this.els = document.querySelectorAll(els);
        this.cbProcess = cbProcess;
        const defaultOptions = {
            root: null,                      
            rootMargin: "-100px 0px",
        }
        this.options = Object.assign(options, defaultOptions);
        this.io = this._init();
    }

    _init() {
        const io = new IntersectionObserver(this._callback.bind(this), this.options);
        this.els.forEach(el => {
            io.observe(el);
        });
        return io;
    }

    _callback(entries, observer) {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                this.cbProcess(entry.target);
                observer.unobserve(entry.target);    
            }
        });
    }
}