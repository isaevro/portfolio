$(document).ready(function(){
	$('.testimonials-slider').slick({
		slidesToShow:1.5,
		slidesToScroll:1,
		autoplay:false,
		autoplaySpeed:5000,
		responsive: [
			{
				breakpoint: 1150,
				settings: {
					slidesToShow: 1,
					centerMode: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					centerMode: false
				}
			},
		]		
	});
	$('.hamburger').click(function() {
		$(this).toggleClass('hamburger--active');
		$('.nav-menu').toggleClass('nav-menu--active');
	});
});

