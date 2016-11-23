

$(document).ready(function(){
	/* ------------------ Slider ------------------ */
	homepageSpotlightSlider();

	/* ------------------ Accordion ------------------ */
	accordionHandler();

	/* ------------------ Go Top Action ------------------ */
	$(".btnGoTop > a").bind("click", function(){
		$("body, html").stop(true, false);
		$("body, html").animate({scrollTop:0},{duration:300});
		return false;
	});
});



/* ********************** Slider - Start ********************** */
function homepageSpotlightSlider(){
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
}



/* ********************** Accordion - Start ********************** */
function accordionHandler(){
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
}