$(document).ready(function() {
    $('.header__burger').click(function(){
        $('.header__burger, .header__menu').toggleClass('active');
	$('body').toggleClass('lock');
    });

    $('.header__menu').click(function(){
       $('.header__burger, .header__menu').removeClass('active');
    $('body').removeClass('lock');
    });
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 1){
    $('header').addClass("scroll");
    }
    else{
    $('header').removeClass("scroll");
    }
    });
