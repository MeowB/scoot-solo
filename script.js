let hamburger = document.querySelector('.hamburger')
let cross = document.querySelector('.cross')
let header = document.querySelector('header')
let body = document.querySelector('body')
let main = document.querySelector('main')

hamburger.addEventListener('click', () => {
	hamburger.style.display = 'none'
	cross.style.display = 'inline'
	body.style.height = '100vh'
	body.style.overflowY = 'hidden'
	main.style.overflow = 'hidden'
	header.classList.add('slide-menu')
})

cross.addEventListener('click', () => {
	cross.style.display = 'none'
	hamburger.style.display = 'inline'
	body.style.overflow = 'scroll'
	body.style.height = 'auto'
	header.classList.remove('slide-menu')
})

window.addEventListener('resize', () => {
	if (visualViewport.width > 770) {
		cross.style.display = 'none'
		hamburger.style.display = 'none'
		cross.style.display = 'none'
		hamburger.style.display = 'none'
		header.classList.remove('slide-menu')
	} else {
		if (cross.style.display === 'none') {
			hamburger.style.display = 'inline'
		}

	}
})