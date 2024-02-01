const agreeBtn = document.querySelector('.main-section__answers--yes')
const declineBtn = document.querySelector('.main-section__answers--nope')
const p = document.querySelector('.main-section__text')
const img = document.querySelector('.main-section__question-img')

const buttonHeight = 30
const buttonWidth = 80
const maxWidth = window.innerWidth - buttonWidth
const maxHeight = window.innerHeight - buttonHeight

window.addEventListener('DOMContentLoaded', () => {
	declineBtn.addEventListener('click', () => {
		declineBtn.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px'
		declineBtn.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px'
	})

	agreeBtn.addEventListener('click', () => {
		p.innerHTML = 'Merci (in chamber`s voice :3)'
        agreeBtn.innerHTML = 'YESSS❤️'
		img.src = 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcnFybG9nbXU4ajljNWduZGcxcnJwdDJ6dDRwM3lsanV3ZjhiNTFsbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/S9ceVioSdQGGRmcVkm/giphy.gif'
        declineBtn.classList.add('none')
	})
})
