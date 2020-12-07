let result = document.querySelector('.result span')
let btns = document.querySelectorAll('.cards__btn')
let arry = []
let res = 0

for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener('click', () => {
		let item = +btns[i].dataset.price
		arry.push(item)
		console.log(arry)
		res = arry.reduce((x, y) => x + y)
		result.innerHTML = res
	})
}

//  modal window script 
let closeBtn = document.querySelector('.modal__close')
let modal = document.querySelector('.modal')
let cardsImg = document.querySelectorAll('.cards__img')
let modalImg = document.querySelector('.modal__images')

for (let j = 0; j < cardsImg.length; j++) {
	cardsImg[j].addEventListener('click', function () {
		let img = cardsImg[j].dataset.link
		modal.classList.add('show-modal')
		modalImg.innerHTML = `<img src="${img}" alt="images" class="modal__img">`
	})
}

closeBtn.addEventListener('click', function () {
	modal.classList.remove('show-modal')
})