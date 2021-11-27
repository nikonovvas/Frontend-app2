function onClickMenu(){
    document.getElementById('btn-menu').classList.toggle('active');
    document.getElementById('head-menu').classList.toggle('active');
};

window.onscroll = function (){
    if(window.pageYOffset >= 100){
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

function readMore(){
	var more=document.getElementById('show-more');
	var more__btn=document.getElementById('more__btn');

	if(more.style.display == 'inline'){
		more.style.display = 'none';
		more__btn.innerHTML = 'Больше туров';
	}
	else{
		more.style.display = 'inline';
		more__btn.innerHTML = 'Cкрыть';
	}
}