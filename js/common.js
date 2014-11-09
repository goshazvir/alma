head.ready(function() {
		$("a.topp").click(function() {
	    $("html, body").animate({
	      scrollTop: $($(this).attr("href")).offset().top + "px"
	    }, {
	      duration: 500
	    });
	    return false;
		});

		$('.js-slider').flexslider({
			namespace: "slider-",
			smoothHeight: true,
			animation: "slide",
			selector: ".slider-items > .slider-item",
			directionNav: false,
			// controlsContainer: ".slider",
			useCSS: false,
			controlNav: false,
			slideshow: false
		});
		$('.slider-prev').on('click', function(){
		    $('.js-slider').flexslider('prev')
		    return false;
		});

		$('.slider-next').on('click', function(){
		    $('.js-slider').flexslider('next')
		    return false;
		});


		$('.js-minislide').flexslider({
			namespace: "minislide-",
			smoothHeight: true,
			animation: "slide",
			selector: ".js-minislide-in > .minislide-item",
			directionNav: false,
			// controlsContainer: ".slider",
			useCSS: false,
			controlNav: false,
			slideshow: false
		});
		$('.minislide-prev').on('click', function(){
		    $('.js-minislide').flexslider('prev')
		    return false;
		});

		$('.minislide-next').on('click', function(){
		    $('.js-minislide').flexslider('next')
		    return false;
		});
		$('.js-flexslider').flexslider({
			namespace: "gallery-",
			smoothHeight: true,
			animation: "slide",
			selector: ".js-flexslider-in > .gallery-item",
			directionNav: false,
			// controlsContainer: ".slider",
			useCSS: false,
			controlNav: false,
			slideshow: false
		});
		$('.gallery-prev').on('click', function(){
		    $('.js-flexslider').flexslider('prev')
		    return false;
		});

		$('.gallery-next').on('click', function(){
		    $('.js-flexslider').flexslider('next')
		    return false;
		});

		function header_fixed() {
			var slider = $(".slider-wrap").offset().top;

			var pos = $(".js-nav").offset().top;
			var pos2 = (pos + 55);
			var position = (pos + 138);
			var position_2 = $(".header-bg").offset().top;

			if ($(window).scrollTop() >= pos2) {
			  $(".js-nav").addClass('test');
			}

			if ($(window).scrollTop() >= position) {
			  $(".js-nav").addClass('is-fixed');
			  $(".basket").addClass('is-fixed');
			}
			if ($(window).scrollTop() <= slider) {
			  $(".js-nav").removeClass('is-fixed');
			  $(".js-nav").removeClass('test');
			  $(".basket").removeClass('is-fixed');
			}

		}
		if ($(".js-nav").length > 0){
		  header_fixed();
		}

		$(window).scroll(function(){
		  if ($(".js-nav").length > 0){
			  header_fixed();
			}
		});

		// $('.js-toogle-top').on('click', function() {
		//  $(".topper").toggleClass("is-active");
		//  $(".topper-in").slideToggle();
		// });

		$('.js-toogle-top').on('click', function() {
			if($('.topper').hasClass('is-active')){
				$('.topper').removeClass('is-active');
				$('.topper-in').slideDown();
			} else {
				$('.topper').addClass('is-active');
				$('.topper-in').slideUp();
			}
		});

		$(window).resize(function(){
				if($(window).width() > 768){
					if($('.topper').hasClass('is-active')){
						$('.topper').removeClass('is-active');
						$('.topper-in').show();
					}
				}
		});
		$('.js-navmobile').on('click', function() {
		 $(".nav-list").slideToggle();
		});

		$('#defaultCountdown').countdown({until: '+6d +21h +39m +27s', format: 'YOWDHMS', significant: 4}); 


});