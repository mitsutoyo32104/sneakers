// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/


var bar = new ProgressBar.Line(loader, {
    strokeWidth: 4,
    easing: 'easeInOut',
    duration: 1400,
    color: 'white',
    trailColor: 'transparent',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '10px'},
    text: {
      style: {
        // Text color.
        // Default: same as stroke color (options.color)
        color: '#999',
        position: 'absolute',
        right: '50%',
        top: '55%',
        padding: 0,
        margin: 0,
        transform: null
      },
      autoStyleContainer: false
    },
    from: {color: '#FFEA82'},
    to: {color: '#ED6A5A'},
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + ' %');
    }
  });
  
  bar.animate(1.0);  // Number from 0.0 to 1.0


setTimeout(function() {
    const container = document.querySelector('#loader');
    container.style.opacity = 0;
    container.style.pointerEvents = 'none';
}, 2400);