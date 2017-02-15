$(document).ready(function(){

	$(window).bind('scroll', function(){
		var navHeight=$(window).height()-70;

		
		if ($(window).scrollTop() > navHeight) {
			$('nav').addClass('fixnav');
		}
		else{
			$('nav').removeClass('fixnav');
		}
	});
});

