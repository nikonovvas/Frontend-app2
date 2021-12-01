function onClickMenu() {
	document.getElementById('btn-menu').classList.toggle('active');
	document.getElementById('head-menu').classList.toggle('active');
};

window.onscroll = function () {
	if (window.pageYOffset >= 100) {
		document.getElementById('header').classList.add('scroll');
	}
	else if (window.pageYOffset < 100) {
		document.getElementById('header').classList.remove('scroll');
	}
}

window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;
	document.querySelectorAll('.section').forEach((el, i) => {
		if (el.offsetTop - document.querySelector('.nav').clientHeight <= scrollDistance) {
			document.querySelectorAll('.nav a').forEach((el) => {
				if (el.classList.contains('active')) {
					el.classList.remove('active');
				}
			});
			document.querySelectorAll('.nav li')[i].querySelector('a').classList.add('active');
		}
	});
});
//////

document.addEventListener('DOMContentLoaded', init)

function init() {
    // получаем DOM Element
    const buttonToggleItems = document.getElementsByClassName('more__btn')
    if (buttonToggleItems.length === 0) {
        throw new Error('Кнопка не найдена в document');
    }

    const listItemsContainer = document.getElementsByClassName('main')

    // обработчик события клика
    buttonToggleItems[0].addEventListener(
        'click',
        (event) =>
            handleToggleItemsButtonClick(listItemsContainer[0], event)
    )
}

function handleToggleItemsButtonClick(listItemsContainer, pointerEvent) {
    const classForVisibleHiddenItems = 'main--all-hidden-visible'

    if (pointerEvent.currentTarget.innerText === 'Больше туров') {
        pointerEvent.currentTarget.innerText = 'Скрыть'
        listItemsContainer.classList.add(classForVisibleHiddenItems)
    } else {
        pointerEvent.currentTarget.innerText = 'Больше туров'
        listItemsContainer.classList.remove(classForVisibleHiddenItems)
    }
}




