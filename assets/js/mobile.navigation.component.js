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
var MobileNavigationComponent = (function () {
    function MobileNavigationComponent() {
    }
    MobileNavigationComponent.prototype.ngAfterViewInit = function () {
        /* ------------------ Hamburger ------------------ */
        hamburgerHandler();
    };
    MobileNavigationComponent = __decorate([
        core_1.Component({
            selector: 'mobile-navigation-component',
            template: "\n\t\t<div class=\"mobileHeader yellowGradient\">\n\t\t\t<div class=\"mobile-nav-icon\">\n\t            <ul>\n\t            \t<li class=\"first\"></li>\n\t                <li class=\"second\"></li>\n\t                <li class=\"third\"></li>\n\t            </ul>\n\t        </div>\n\t\t\t<div class=\"mobileMenuWrapper\">\n\t\t\t\t<ul class=\"menuLinks\">\n\t\t\t\t\t<li><a href=\"javascript:void(0);\"></a></li>\n\t\t\t\t\t<li><a href=\"index.html\">Home</a></li>\n\t\t\t\t\t<li><a href=\"about-me.html\">Services</a></li>\n\t\t\t\t\t<li><a href=\"store.html\">Store</a></li>\n\t\t\t\t\t<li><a href=\"contact-us.html\">Contact Me</a></li>\n\t\t\t\t</ul>\n\t\t\t\t<ul class=\"social-icons\">\n\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], MobileNavigationComponent);
    return MobileNavigationComponent;
}());
exports.MobileNavigationComponent = MobileNavigationComponent;
//# sourceMappingURL=mobile.navigation.component.js.map