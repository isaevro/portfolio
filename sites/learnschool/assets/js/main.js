$(document).ready(function(){
	$('.courses-slider').slick({
		slidesToShow:3,
		slidesToScroll:1,
		autoplay:false,
		autoplaySpeed:5000,
		responsive: [
			{
				breakpoint: 1250,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 1,
				}
			},
		]		
	});
	$('.feedback-slider').slick({
		slidesToShow:3,
		slidesToScroll:1,
		autoplay:false,
		autoplaySpeed:5000,
		responsive: [
			{
				breakpoint: 1250,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 1,
				}
			},
		]		
	});
	$('.hamburger').click(function() {
		$(this).toggleClass('hamburger--active');
		$('.menu-header').toggleClass('menu-header--active');
	});
});

