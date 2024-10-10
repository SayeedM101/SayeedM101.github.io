//window scroll
$(window).on("scroll", function(){
	var scrollTop=$(window).scrollTop();
	if(scrollTop)=100{
		$('body').addClass('fixed-header');
	}else{
		$('body').removeClass('fixed-header')
	}
});


$(document).ready(function(){
	//owl carousel
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		items:1,
		autoplay:true,
		autoplayTimeout: 2000,
		responsive:{
			0:{
				items:1
			},
			900:{
				items: 2
			}
		}
	})
});