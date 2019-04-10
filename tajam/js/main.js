$(function(){



	// Btn go top
	$(window).scroll(function() {
		
		let currentPosition = $(this).scrollTop();
		if (currentPosition > 1000) {
			$('#goto_top').fadeIn();
		}
		if (currentPosition < 1000) {
			$('#goto_top').fadeOut();
		}
	});
	// 
	$('#goto_top').on('click', function(e) {
		
		$('html, body').animate({scrollTop: 0}, 2000);
	});

	// Header slider
	$('.slider_content').slick({
		arrows: false,
		dots: true,
	});

	// Btn responsive menu
	$('.btn_menu').click(function(){
		$('.menu ul').removeClass('fadeInRight');
		$('.menu ul').slideToggle();
	});

	// Testimonial slider
	$('.slider_central').on('init',
		 function(event, slick) {
		 	let currentSlide = $(slick.$slides).filter('.slick-current');
		 	$(currentSlide).addClass('item-scale');
	});

	$('.slider_central').on('beforeChange',
	 function(event, slick, currentSlide, nextSlide) {
		$(slick.$slides[currentSlide]).removeClass('item-scale');
		$(slick.$slides[nextSlide]).addClass('item-scale');
	});

	$('.slider_central').slick({
		centerMode: true,
		centerPadding: '0px',
		slidesToShow: 4,
		slidesToScroll: 1,
		variableWidth: true,
		draggable: false,
		prevArrow: $('.slider_prev'),
		nextArrow: $('.slider_next'),
		responsive: [
    		{
      			breakpoint: 480,
      			settings: {
        		slidesToShow: 2,
      			}
    		}],
	});

	// add more photo
	$('#load_more_photo').on('click',function(e) {
		e.preventDefault();
	
		let gallery = $('.gallery'),
			firstItem = $(gallery).find('img').length + 1,
			addPhotoNum = 12,
			out = '';

		for (let i = 0; i < addPhotoNum; i++) {
			out += `<div><img src="img/img_${firstItem}.jpg" alt=""></div>`;
			firstItem++;
		}
			$(gallery).append(out);
			$(this).hide();
	});

	// google.map
	let overlay = $('<div class="overlay"></div>')
	
	let popupWidth = $('.map_container').width();

	function resizePopup() {
		let windowWidth = $(window).width();
		if (windowWidth < popupWidth) {
			$('.map_container').width(windowWidth - 40);
		}
	}
	;
	function addOverlay() {
		
		$('.map_container').before(overlay);
		overlay.fadeIn();
	}

	function removeOverlay() {
		overlay.fadeOut(null, function() {
			overlay.remove();
		});
	}

	$('.address').on('click', function() {
		addOverlay();
		resizePopup();
		$('.map_container').fadeIn();
	});
	$('.map_container').on('click', '.icon-close', function() {
		$('.map_container').fadeOut();
		removeOverlay()
	});
	
	$(window).resize(function() {
		resizePopup();		
	});
});



