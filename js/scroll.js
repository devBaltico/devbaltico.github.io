/*==================== Button Scroll to top ====================*/
const btnScrollToTop = document.querySelector('#btnScrollToTop');

btnScrollToTop.addEventListener('click', function () {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth',
	});
	$('html, body').animator({ scrollTop: 0 }, 'slow');
});