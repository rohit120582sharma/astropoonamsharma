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
var HeaderNavigationComponent = (function () {
    function HeaderNavigationComponent() {
    }
    HeaderNavigationComponent = __decorate([
        core_1.Component({
            selector: '[header-navigation-component]',
            template: "\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t<ul class=\"menuLinks\">\n\t\t\t\t\t\t<li><a href=\"#\">Home</a></li>\n\t\t\t\t\t\t<li><a href=\"#\">Services</a></li>\n\t\t\t\t\t\t<li class=\"logo\"><a href=\"#\"><img src=\"../assets/images/logo.png\"></a></li>\n\t\t\t\t\t\t<li><a href=\"#\">Store</a></li>\n\t\t\t\t\t\t<li><a href=\"#\">Contact Me</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderNavigationComponent);
    return HeaderNavigationComponent;
}());
exports.HeaderNavigationComponent = HeaderNavigationComponent;
//# sourceMappingURL=header.navigation.component.js.map