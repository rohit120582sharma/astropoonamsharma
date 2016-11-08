

$(document).ready(function(){
	/* ------------------ Hamburger - Start ------------------ */
	var menuUL = $(".mobile-nav-icon > ul");
	var rootWrapper = $(".rootWrapper");
	var mobileHeader = $(".mobileHeader");
	menuUL.bind("click", function(){
		if(menuUL.hasClass("active") == false){
			navLinksOpenHandler();
		}else{
			navLinksCloseHandler();
		}
		return false;
	});
	function navLinksOpenHandler(){
		menuUL.addClass("active");
		TweenMax.to(menuUL.find('li.first'), 0.3, {  rotation:45, y:10});
		TweenMax.to(menuUL.find('li.second'), 0.3, { opacity:0});	
		TweenMax.to(menuUL.find('li.third'), 0.3, { rotation:-45, y:-10});
		rootWrapper.addClass("slide");
		mobileHeader.addClass("slide");
	}
	function navLinksCloseHandler(){
		menuUL.removeClass("active");
		TweenMax.to(menuUL.find('li.first'), 0.3, {  rotation:0, y:0});
		TweenMax.to(menuUL.find('li.second'), 0.3, { opacity:1});	
		TweenMax.to(menuUL.find('li.third'), 0.3, { rotation:0, y:0});
		rootWrapper.removeClass("slide");
		mobileHeader.removeClass("slide");
	}
	/* ------------------ Hamburger - End ------------------ */


	/* ------------------ Home Slider - Start ------------------ */
	var sliderHome = $('#slider-home');
	var slidesLen = sliderHome.children("div").length;
	var slideNavPrev = $(".slick-nav > .icon-left-arrow");
	var slideNavRight = $(".slick-nav > .icon-right-arrow");
	sliderHome.on('init', function(slick){
		if(slidesLen >= 2){
			slideNavRight.css({'visibility':'visible'});
		}
	});
	sliderHome.on('beforeChange', function(event, slick, currentSlide, nextSlide){
		var prevStatus = (nextSlide <= 0) ? 'hidden' : 'visible';
		var nextStatus = (nextSlide >= (slidesLen-1)) ? 'hidden' : 'visible';
		slideNavPrev.css({'visibility':prevStatus});
		slideNavRight.css({'visibility':nextStatus});
	});
	sliderHome.slick({
		dots: false,
		infinite: false,
		fade: true,
		cssEase: 'linear',
		autoplay: true,
		arrows: false
	});
	$(".slick-nav > .icon-left-arrow").bind("click", function(e){
		sliderHome.slick('slickPrev');
		return false;
	});
	$(".slick-nav > .icon-right-arrow").bind("click", function(e){
		sliderHome.slick('slickNext');
		return false;
	});
	/* ------------------ Home Slider - End ------------------ */


	/* ------------------ Window Scroll - Start ------------------ */
	$(window).bind("scroll", function(){
		windowScrollHandler();
	});
	windowScrollHandler();
	function windowScrollHandler(){
		// add/remove slide class in body
		var scrollTop = $(document).scrollTop();
		if(scrollTop >= 120){
			$("body").addClass("scroll");
		}else{
			$("body").removeClass("scroll");
		}
		$("[data-anim-class^='animated']").each(function(index, element){
			var domElem = $(this);
			var vh = verge.viewport().height * -0.25;
			var animClass = domElem.attr("data-anim-class");
			if(verge.inViewport(domElem, vh)){
				domElem.css('visibility','visible');
				domElem.addClass(animClass);
			}
		});
	}
	/* ------------------ Window Scroll - End ------------------ */


	/* ------------------ Accordion - Start ------------------ */
	$(".compAccordion").each(function(){
		var accordion = $(this);
		var aTags = accordion.children("a");
		var iTags = aTags.children("i");
		var pTags = accordion.children("p");

		pTags.slideUp();
		iTags.removeClass("fa-compress").addClass("fa-expand");

		aTags.each(function(){
			var aTag = $(this);
			var pTag = aTag.next("p");
			var iTag = aTag.children("i");
			aTag.bind("click", function(){
				var isCompressed = iTag.hasClass("fa-compress");
				pTags.slideUp();
				aTags.removeClass("active");
				iTags.removeClass("fa-compress").addClass("fa-expand");
				if(!isCompressed){
					pTag.stop(true, false);
					pTag.slideDown();
					aTag.addClass("active");
					iTag.removeClass("fa-expand").addClass("fa-compress");
				}
				return false;
			});
		});
	});
	$(".compAccordion").eq(0).children("a").eq(0).trigger("click");
	/* ------------------ Accordion - End ------------------ */


	/* ------------------ Cotact validation - Start ------------------ */
	$("#contact").validate({
		rules:{
			name:{
				required: true,
				minlength: 2,
				onlyalphabatic: true
			},
			email:{
				required: true,
				email: true,
				EmailPatternchk: true
			},
			phone:{
				required: true,
				digits: true,
				minlength: 10,
				maxlength: 10
			}
		},
		messages:{
			name:{
				required: "This field is required",
				minlength: "Please enter a valid name",
				onlyalphabatic: "Please enter a valid name"
			},
			email:{
				required: "This field is required",
				email: "Please enter a valid email",
				EmailPatternchk: "Please enter a valid email"
			},
			phone:{
				required: "This field is required",
				digits: "Please enter a valid number",
				minlength: "Please enter at least 10 digits",
				maxlength: "Please enter at least 10 digits"
			}
		},
		error_class: "error"
	});
	/* ------------------ Cotact validation - End ------------------ */
});