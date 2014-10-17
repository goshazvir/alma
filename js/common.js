head.ready(function() {
		$("a.topp").click(function() {
	    $("html, body").animate({
	      scrollTop: $($(this).attr("href")).offset().top + "px"
	    }, {
	      duration: 500
	    });
	    return false;
		});

		$('.js-flexslider').flexslider({
			namespace: ".gallery-",
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
		})

		$('.gallery-next').on('click', function(){
		    $('.js-flexslider').flexslider('next')
		    return false;
		})


		$('.js-minislide').flexslider({
			namespace: ".minislide-",
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
		})

		$('.minislide-next').on('click', function(){
		    $('.js-minislide').flexslider('next')
		    return false;
		})
});