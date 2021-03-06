// Move Shadow on Carousel
function giveShadow(c) {
	$(`.${c}`).addClass('shadow')
}
function removeShadow(c) {
	$(`.${c}`).removeClass('shadow')
}
function nextChar(c) {
	if (c == 'f') {
		return 'a'
	}
	return String.fromCharCode(c.charCodeAt(0) + 1)
}
function prevChar(c) {
	if (c == 'a') {
		return 'f'
	}
	return String.fromCharCode(c.charCodeAt(0) - 1)
}

// Carousel Logic inspired partially by https://codepen.io/nopr/pen/rfBJx
var carousel = $('.carousel'),
	currdeg = 0
var currentShadowChar = 'a'

$('.next').on('click', { d: 'n' }, rotate)
$('.prev').on('click', { d: 'p' }, rotate)

$('.next').on('click', () => {
	moveShadowForward(currentShadowChar)
	currentShadowChar = nextChar(currentShadowChar)
})
$('.prev').on('click', () => {
	moveShadowBackward(currentShadowChar)
	currentShadowChar = prevChar(currentShadowChar)
})

function rotate(e) {
	if (e.data.d == 'n') {
		currdeg = currdeg - 60
	}
	if (e.data.d == 'p') {
		currdeg = currdeg + 60
	}
	carousel.css({
		'-webkit-transform': 'rotateY(' + currdeg + 'deg)',
		'-moz-transform': 'rotateY(' + currdeg + 'deg)',
		'-o-transform': 'rotateY(' + currdeg + 'deg)',
		transform: 'rotateY(' + currdeg + 'deg)',
	})
}

function moveShadowForward(c) {
	removeShadow(c)
	giveShadow(nextChar(c))
}

function moveShadowBackward(c) {
	removeShadow(c)
	giveShadow(prevChar(c))
}
