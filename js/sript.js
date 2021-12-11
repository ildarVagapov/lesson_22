


const buttonBlock = document.querySelector('.block__button')
const buttonBlock2 = document.querySelector('.block__button2')
const spanBlock = document.querySelector('.block__span')

if (buttonBlock) {
	buttonBlock.addEventListener('click', function (e) {
		spanBlock.classList.add('active')
		buttonBlock2.classList.add('button__active')
		buttonBlock.classList.add('button__none')
	});
}
if (buttonBlock2) {
	buttonBlock2.addEventListener('click', function (e) {
		spanBlock.classList.remove('active')
		buttonBlock2.classList.remove('button__active')
		buttonBlock.classList.remove('button__none')
	});
}