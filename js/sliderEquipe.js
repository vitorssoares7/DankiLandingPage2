$(function(){

    var delay = 3000;
    var cindex = 0;
    var amt;

    initSlider();
    autoPlay();

    function initSlider(){
        amt = $('.sobre-autor').length;
		var sizeContainer = 100 * amt;
		var sizeBoxSingle = 100 / amt;
		$('.sobre-autor').css('width',sizeBoxSingle+'%');
		$('.scroll-wraper').css('width',sizeContainer+'%'); 

        for(var i = 0; i < amt; i++){
			if(i == 0)
				$('.slider-bullets').append('<span style="background-color:rgb(170,170,170);"></span>');
			else
				$('.slider-bullets').append('<span></span>');
		}
    }

    function autoPlay(){
        setInterval(function(){
            cindex++;
            if(cindex == amt){
                cindex = 0;
            }
            goToSlider(cindex);
        },delay)
    }

    function goToSlider(cindex){
        var offSetX = $('.sobre-autor').eq(cindex).offset().left - $('.scroll-wraper').offset().left;
        $('.slider-bullets span').css('background-color', 'rgb(200,200,200)');
        $('.slider-bullets span').eq(cindex).css('background-color', 'rgb(170,170,170)');
        $('.scrollEquipe').stop().animate({'scrollLeft':offSetX+'px'});
    }

    $(window).resize(function(){
        $('.scrollEquipe').stop().animate({'scrollLeft':0});
    })
})