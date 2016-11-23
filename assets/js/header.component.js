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
var utility_service_1 = require("./utility.service");
var HeaderComponent = (function () {
    function HeaderComponent(elementRef, utilityService) {
        this.elementRef = elementRef;
        this.utilityService = utilityService;
        this._selectedNav = this.utilityService.getSelectedNav();
    }
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'header-component',
            template: "\n\t\t<div class=\"menuWrapper\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t<ul class=\"menuLinks\">\n\t\t\t\t\t\t\t<li><a routerLink=\"home\" [class.active]=\"_selectedNav.name=='home'\">Home</a></li>\n\t\t\t\t\t\t\t<li><a routerLink=\"about\" [class.active]=\"_selectedNav.name=='about'\">About</a></li>\n\t\t\t\t\t\t\t<li class=\"logo\"><a href=\"javascript:void(0);\"><img src=\"../assets/images/logo.png\"></a></li>\n\t\t\t\t\t\t\t<li><a routerLink=\"store\" [class.active]=\"_selectedNav.name=='store'\">Store</a></li>\n\t\t\t\t\t\t\t<li><a routerLink=\"contact\" [class.active]=\"_selectedNav.name=='contact'\">Contact Me</a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, utility_service_1.UtilityService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map