let frames1 = document.querySelectorAll('.faq1 .frame')
let frames2 = document.querySelectorAll('.faq2 .frame')

function collapseFaq(frames) {
	frames.forEach(frame => {
		frame.addEventListener('click', () => {

			for (let i = 0; i < frames.length; i++) {
				currentFrame = frames[i]
				currentFrame.classList.remove('active')
			}

			frame.classList.add('active')
		})
	})
}

collapseFaq(frames1)
collapseFaq(frames2)