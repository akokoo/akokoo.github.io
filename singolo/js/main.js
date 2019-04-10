$(function($){

	// Slider init
	$('.slider_content').slick({
    	prevArrow: $('.prev'),
    	nextArrow: $('.next'),
    	slidesToShow: 1,
  		slidesToScroll: 1,
  		autoplay: true,
  		autoplaySpeed: 2000,
  		
	});

	// Button menu
	$('.btn_menu').click(function() {
		$('.menu ul').slideToggle();
	});

	// Button portfolio
	$('.btn_portfolio').click(function(e) {
		let currentElement = $(e.target);
		if (e.target.tagName !== 'UL') {
			
		
			// Animate portfolio button
			$('.btn_portfolio').find(e.target.tagName).removeClass('active');
		

			$(currentElement).addClass('active');
		
			// Open gallery by type
			$('.portfolio .row').children().each( function(i, item) {

				if (currentElement.data('type') == 'all') {
				
					$(item).css('display', 'block');

				} else if ($(item).data('type') == currentElement.data('type')) {
				
					$(item).css('display', 'block');

				} else {

					$(item).css('display', 'none');

				}
			});
		}
	});


}(jQuery));