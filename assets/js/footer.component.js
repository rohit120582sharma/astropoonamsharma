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
var FooterComponent = (function () {
    function FooterComponent(elementRef) {
        this.elementRef = elementRef;
    }
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'footer-component',
            template: "\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-xs-6 col-md-4\">\n\t\t\t\t\t<img class=\"img-responsive img-footer-logo\" src=\"assets/images/footer-logo.jpg\" alt=\"Sai Astro Solutions\" title=\"Sai Astro Solutions\" />\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-xs-6 col-md-4 hidden-xs hidden-sm\"></div>\n\t\t\t\t<div class=\"col-xs-6 col-md-4\">\n\t\t\t\t\t<address>\n\t\t\t\t\t\t<h6>Contact Us</h6>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tMrs Poonam Sharma\n\t\t\t\t\t\t\t<br>E-mail :- <a href=\"mailto:info@astropoonamsharma.com\">info@astropoonamsharma.com</a>\n\t\t\t\t\t\t\t<br>E-mail :- <a href=\"mailto:question@astropoonamsharma.com\">question@astropoonamsharma.com</a>\n\t\t\t\t\t\t\t<br>Phone : <a href=\"tel:+91 9893553174\">+91 9893553174</a>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</address>\n\t\t\t\t\t<address>\n\t\t\t\t\t\t<h6>Address</h6>\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\tC70, Old Minal Residency, JK-Road\n\t\t\t\t\t\t\t<br>Bhopal, Madhya Pradesh, Pincode-462023\n\t\t\t\t\t\t\t<br>Country-India\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</address>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t<div class=\"footerBottom\">\n\t\t\t\t\t\t<p class=\"copyright\">\u00A9 2016. All Rights Reserved.</p>\n\t\t\t\t\t\t<ul class=\"social-icons\">\n\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n\t\t\t\t\t\t\t<li><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=footer.component.js.map