"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var UtilityService = (function () {
    function UtilityService() {
    }
    /* ********************** Mobile Navigation - Start ********************** */
    UtilityService.prototype.hamburgerHandler = function () {
        var menuUL = $(".mobile-nav-icon > ul");
        var rootWrapper = $(".rootWrapper");
        var mobileHeader = $(".mobileHeader");
        menuUL.bind("click", function () {
            if (menuUL.hasClass("active") == false) {
                navLinksOpenHandler();
            }
            else {
                navLinksCloseHandler();
            }
            return false;
        });
        function navLinksOpenHandler() {
            menuUL.addClass("active");
            TweenMax.to(menuUL.find('li.first'), 0.3, { rotation: 45, y: 10 });
            TweenMax.to(menuUL.find('li.second'), 0.3, { opacity: 0 });
            TweenMax.to(menuUL.find('li.third'), 0.3, { rotation: -45, y: -10 });
            rootWrapper.addClass("slide");
            mobileHeader.addClass("slide");
        }
        function navLinksCloseHandler() {
            menuUL.removeClass("active");
            TweenMax.to(menuUL.find('li.first'), 0.3, { rotation: 0, y: 0 });
            TweenMax.to(menuUL.find('li.second'), 0.3, { opacity: 1 });
            TweenMax.to(menuUL.find('li.third'), 0.3, { rotation: 0, y: 0 });
            rootWrapper.removeClass("slide");
            mobileHeader.removeClass("slide");
        }
    };
    /* ********************** Light Box - Start ********************** */
    UtilityService.prototype.lightBoxHandler = function (className) {
        var items = $(className);
        if (items.length <= 0) {
            return;
        }
        items.fancybox({
            openEffect: 'elastic',
            closeEffect: 'elastic',
            helpers: {
                title: {
                    type: 'inside'
                }
            }
        });
    };
    /* ********************** Match Height - Start ********************** */
    UtilityService.prototype.matchHeightHandler = function (className) {
        var items = $(className);
        if (items.length <= 0) {
            return;
        }
        items.matchHeight({
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        });
    };
    /* ********************** Contact Form Validation - Start ********************** */
    UtilityService.prototype.contactFormValidationHandler = function () {
        $("#contact").validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2,
                    onlyalphabatic: true
                },
                email: {
                    required: true,
                    email: true,
                    EmailPatternchk: true
                },
                phone: {
                    required: true,
                    digits: true,
                    minlength: 10,
                    maxlength: 10
                }
            },
            messages: {
                name: {
                    required: "This field is required",
                    minlength: "Please enter a valid name",
                    onlyalphabatic: "Please enter a valid name"
                },
                email: {
                    required: "This field is required",
                    email: "Please enter a valid email",
                    EmailPatternchk: "Please enter a valid email"
                },
                phone: {
                    required: "This field is required",
                    digits: "Please enter a valid number",
                    minlength: "Please enter at least 10 digits",
                    maxlength: "Please enter at least 10 digits"
                }
            },
            error_class: "error"
        });
    };
    UtilityService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UtilityService);
    return UtilityService;
}());
exports.UtilityService = UtilityService;
//# sourceMappingURL=utility.service.js.map