head.ready(function() {
		$("a.topp").click(function() {
	    $("html, body").animate({
	      scrollTop: $($(this).attr("href")).offset().top + "px"
	    }, {
	      duration: 500
	    });
	    return false;
		});
});