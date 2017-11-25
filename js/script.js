$(function ($) {
	$(document).ready(function () {
		$('.clients__slider').slick({
			dots: true,
			arrows: false,
			infinity: true,
			slidesToShow: 6,
			slidesToScroll: 3,
			speed: 600,
			autoplay: true,
			autoplaySpeed: 3000,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 5
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: 640,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						centerMode: true
					}
				},
				{
					breakpoint: 520,
					settings: {
						slidesToShow: 2,
						centerMode: false
					}
				},
				{
					breakpoint: 420,
					settings: {
						slidesToShow: 1,
						centerMode: true,
						dots: false
					}
				}
			]
		});

		$(".main-header__mouse").on("click", function (event) {
			event.preventDefault();
			var id = $(this).attr('href'),
					top = $(id).offset().top;

			$('body, html').animate({scrollTop: top}, 800);
		});
	})
})(jQuery);