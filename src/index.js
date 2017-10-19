(function () {

    // Establish the root object, `window` (`self`) in the browser, `global`
    // on the server, or `this` in some virtual machines. We use `self`
    // instead of `window` for `WebWorker` support.
    let root = typeof self == 'object' && self.self === self && self ||
        typeof global == 'object' && global.global === global && global ||
        this ||
        {};

    function HideEmails() {
      let emailEles = document.querySelectorAll('.h-email');
      if (emailEles.length) {
        emailEles.forEach((ele) => renderCanvas(ele));
      }
    }

    function renderCanvas(ele) {
      let styles = getComputedStyle(ele);
      let fontFamily = styles.fontFamily;
      let fontSize = styles.fontSize;
      let fontSizeInt = fontSize.match(/([0-9]+)/g).length ? parseInt(fontSize.match(/([0-9]+)/g)[0]) : 12;
      let canvas = document.createElement('canvas');
      let ctx = canvas.getContext('2d');
      let text = atob(ele.dataset.hea);
      ctx.font = fontSize + " " + fontFamily;
      canvas.width = Math.ceil(ctx.measureText(text).width);
      // 2 to prevent rendering issues
      canvas.height = fontSizeInt + 2;
      // Need to find a solution for hidipi screens
      // canvas.style.width = Math.ceil(canvas.width / 2) + 'px';
      // canvas.style.height = Math.ceil(canvas.height / 2) + 'px';
      // ctx.scale(2,2); // Don't understand this one yet
      ctx.textBaseline = "hanging";
      ctx.fillStyle = styles.color;
      ctx.font = fontSize + " " + fontFamily;
      ctx.fillText(text, 0, 0);
      ele.appendChild(canvas);
    }

    // Module
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(function () {
            return HideEmails;
        });
    } else if (typeof module !== 'undefined' && module.exports) {
        // CommonJS
        module.exports = HideEmails;
    } else {
        // Bind to root
        root.HideEmails = HideEmails;
    }
}());
