import { Injectable } from "@angular/core";

declare var $: any;
declare var TweenMax: any;

@Injectable()
export class UtilityService{
	/* ********************** Mobile Navigation - Start ********************** */
	hamburgerHandler(){
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
	}


	/* ********************** Light Box - Start ********************** */
	lightBoxHandler(className){
		var items = $(className);
		if(items.length <= 0){
			return;
		}
		items.fancybox({
			openEffect	: 'elastic',
			closeEffect	: 'elastic',
			helpers : {
				title : {
					type : 'inside'
				}
			}
		});
	}


	/* ********************** Match Height - Start ********************** */
	matchHeightHandler(className){
		var items = $(className);
		if(items.length <= 0){
			return;
		}
		items.matchHeight({
			byRow: true,
			property: 'height',
			target: null,
			remove: false
		});
	}


	/* ********************** Contact Form Validation - Start ********************** */
	contactFormValidationHandler(){
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
	}
}