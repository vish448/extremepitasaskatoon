$(function() {
	var sw = document.body.clientWidth, breakpoint = 500, mobile = true;
	var checkMobile = function() {
		mobile = (sw > breakpoint) ? false : true;
	};
	
	checkMobile();
	var backgroundycoord = 0;
	var ypos = new Array();
	ypos[0] = 58;
	ypos[1] = 538;
	ypos[2] = 1049;
	ypos[3] = 1542;
	ypos[4] = 2030;
	ypos[5] = 2975;
	
	// Slideshow 1
    $(window).load(function(){
      $('.flexslider').flexslider({
        animation: "slide",
		direction: "horizontal",
		easing: "easeInOutCirc",
		reverse:"false",
		touch: true
      });
    });

	if (mobile) {
		$("#navitems").addClass("mobile");
	}
	
	$(window).on("scroll", function(){
		var windowScroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		
		if (!mobile) {
			if (windowScroll > (windowHeight - 600)) {
				$('#navitems').css("marginTop","-15px");
				$('#navitems').css("paddingBottom","5px");
			} else {
				$('#navitems').css("marginTop","0px");
				$('#navitems').css("paddingBottom","20px");
			}
		}
		
		// Custom Scrollspy
		mount();
	});
	
	function mount() {
        var e, n, i, a,b,c;
		$("#navitems ul a").each(function(){	
			a = $($(this).attr("href")).offset().top + $($(this).attr("href")).outerHeight() -500, 
			b = $(this), 
			c = $(window).scrollTop();
			
			if (a <= c) {
				$("#navitems ul a").removeClass("active");
				$(this).addClass("active");
			} else {
				$(this).removeClass("active");
			}
		});
    }

	$('#nav a, .arrow a, .button, .anchor').click(function(){
	    $('html, body').stop().animate({
	        scrollTop: $( $(this).attr('href') ).offset().top
	    }, 1000, "easeInOutCirc");
	    return false;
	});
}); 
