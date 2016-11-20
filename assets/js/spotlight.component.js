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
var SpotlightComponent = (function () {
    function SpotlightComponent(elementRef) {
        this.elementRef = elementRef;
        this.title = elementRef.nativeElement.getAttribute('title');
        this.description = elementRef.nativeElement.getAttribute('description');
        this.classname = elementRef.nativeElement.getAttribute('classname');
    }
    SpotlightComponent = __decorate([
        core_1.Component({
            selector: 'spotlight-component',
            template: "\n\t\t<div class=\"spotlightWrapper txtWhite\">\n\t\t\t<div class=\"banner-slider-list\" id=\"slider-home\">\n\t\t\t\t<div class=\"banner-slider-item\" [ngClass]=\"classname\">\n\t\t\t\t\t<div class=\"slider-img\">\n\t\t\t\t\t\t<div class=\"slider-content\">\n\t\t\t\t\t\t\t<div class=\"inner-text container\">\n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"classname == 'slider-home'\" class=\"img-responsive img-circle astro-pic\" src=\"../assets/images/saiastro-1.jpg\">\n\t\t\t\t\t\t\t\t\t\t<h1>{{title}}</h1>\n\t\t\t\t\t\t\t\t\t\t<p>{{description}}</p>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<ul class=\"slick-nav\">\n\t\t\t\t<li class=\"icon-left-arrow\">\n\t\t\t\t\t<i class=\"fa fa-arrow-circle-left\"></i>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"icon-right-arrow\">\n\t\t\t\t\t<i class=\"fa fa-arrow-circle-right\"></i>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], SpotlightComponent);
    return SpotlightComponent;
}());
exports.SpotlightComponent = SpotlightComponent;
//# sourceMappingURL=spotlight.component.js.map