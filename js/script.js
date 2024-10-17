// WINDOW SCROLL

$(window).on("scroll", function(){
	var scrollTop = $(window).scrollTop();
	if(scrollTop >= 100) {
		$('body').addClass('fixed-header');
	}else{
		$('body').removeClass('fixed-header');
	}
});

//DOCUMENT READY

$(document).ready(function() {

	new Typed('#type-it' , {
		strings: ['Designer', 'Developer'],
		typeSpeed: 100,
		loop: true,
	});

	// Owl Carousel

	$('.owl-carousel').owlCarousel({
		loop:true,
		item: 2,
		margin: 30,
		autoplay: true,
		autopalyTimeout: 2000,
		responsive:{
			0:{
				items:1
			},
			900:{
				items:1
			},
		}
	})
});