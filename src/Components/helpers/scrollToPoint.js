/**
 * Function to scroll to a particular point on the DOM
 * @param {Number} top - pageYoffset of form
 */
export function scrollToPoint(top) {
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const speed = 40;
    const initialPoint = window.scrollY ? window.scrollY : window.pageYOffset;
    const scrollDown = top >= initialPoint;

    if (scrollDown) {
        top = top > docHeight - winHeight ? docHeight - winHeight : top;
    } else {
        top = docHeight <= winHeight ? 0 : top;
    }

    window.requestAnimationFrame(winScroll);

    function winScroll(timestamp) {
        let scroll = window.scrollY ? window.scrollY : window.pageYOffset;
        if (scrollDown) {
            if (scroll >= top) {
                return window.cancelAnimationFrame(timestamp);
            }
            scroll += speed;
        } else {
           
            if (scroll <= top) {
                return window.cancelAnimationFrame(timestamp);
            }
            scroll -= speed;
        }
        window.scroll(0, scroll);
        window.requestAnimationFrame(winScroll);
    }
}

/**
 * 
 * @param {Node} el - DOM Element
 * @returns {Number} - integer representing offsetTop of the element relative to the viewport
 */
export function offsetTop (el) {
    const rect = el.getBoundingClientRect(),
    scrollTop = window.scrollY ? window.scrollY : window.pageYOffset;
    return rect.top + scrollTop;
}