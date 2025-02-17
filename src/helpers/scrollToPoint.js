import "raf/polyfill";
/**
 * Function to scroll to a particular point on the DOM or within a overflow:scroll box
 * @param {Number} top - pageYoffset of form
 * @param {HTMLElement} [parent=window] - defaults to window, but can receive any DOM element that is a parent of the scollpoint
 * @param {HTMLElement} [el=null] - not necessary if scrolling on window, but if scrolling within a container it must be provided
 */
export function scrollToPoint(top = 0, parent = window, el = null) {
	if (parent !== window && !el) {
		return;
	}
	const parentHeight =
		parent === window
			? document.documentElement.scrollHeight
			: parent.scrollHeight;
	const visibleHeight =
		parent === window ? window.innerHeight : parent.clientHeight;
	let initialPoint;
	if (parent === window) {
		initialPoint = parent.scrollY ? parent.scrollY : parent.pageYOffset;
	} else {
		initialPoint = el.offsetTop;
	}
	const scrollDown = top >= initialPoint;

	if (scrollDown) {
		top =
			top > parentHeight - visibleHeight ? parentHeight - visibleHeight : top;
	} else {
		top = parentHeight <= visibleHeight ? 0 : top;
	}
	window.requestAnimationFrame(uiScroll);

	function uiScroll(timestamp) {
		let scroll;
		if (parent === window) {
			scroll = parent.scrollY ? parent.scrollY : parent.pageYOffset;
		} else {
			scroll = parent.scrollTop;
		}
		const speed = Math.ceil(Math.sqrt(Math.abs(top - scroll))) + 2;
		if (scrollDown) {
			if (scroll + speed > top) {
				window.cancelAnimationFrame(timestamp);
				return;
			}
			scroll = scroll + speed >= top ? top : scroll + speed;
		} else {
			if (scroll - speed < top) {
				window.cancelAnimationFrame(timestamp);
				return;
			}
			scroll = scroll - speed <= top ? top : scroll - speed;
		}
		parent.scroll(0, scroll);
		window.requestAnimationFrame(uiScroll);
	}
}

/**
 *
 * @param {HTMLElement} el - DOM Element
 * @param {HTMLElement} parent - DOM element - defaults to window
 * @returns {Number} - integer representing offsetTop of the element relative to the viewport
 */
export function offsetTop(el, parent = window) {
	if (parent !== window && !el) {
		return;
	} else if (parent === window) {
		let rect = el.getBoundingClientRect(),
			scrollTop = parent.scrollY ? parent.scrollY : parent.pageYOffset;
		return rect.top + scrollTop;
	} else {
		return el.offsetTop;
	}
}
