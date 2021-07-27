$(function () {
	"use strict";

	//type js 
	if($.fn.animatedHeadline){
        $('.typed').animatedHeadline({
            animationType: 'clip'
        });
	}
	//header slider js
	$('.slider_image').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		dots: false,
		autoplaySpeed: 4000,
		infinite: true,
		arrows: false,
		speed: 1000,
		fade: true,
		cssEase: 'linear'
	});
	//animation scroll js
	

// testimonial slider
	$('.slider_testimonial').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		dots: true,
		autoplaySpeed: 4000,
		infinite: true,
		arrows: false,
		speed: 1000,
		fade: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		  ]
	});
	//sticky menu
	$(".js-sticky-menu").waypoint(function(direction){
			if (direction == "down"){
				$("nav").addClass("sticky_menu");
			} else {
				$("nav").removeClass("sticky_menu");
			}
	});
	
	// counter js
	$('.number-count').counterUp({
		delay: 10,
		time: 3000
	});

	// // makes sure the whole site is loaded
	// windo.on('load', function () {
	// 	$("#status").delay(1000).fadeOut();
	// 	$("#preloader").delay(1000).fadeOut("slow");
	// });

}(jQuery));

function openNav() {
	document.getElementById("myNav").style.width = "100%";
}
function closeNav(){
	document.getElementById("myNav").style.width = "0%";
}
