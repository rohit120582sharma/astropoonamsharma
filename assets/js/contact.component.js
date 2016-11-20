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
var ContactComponent = (function () {
    function ContactComponent(utilityService) {
        this.utilityService = utilityService;
    }
    ContactComponent.prototype.ngAfterViewInit = function () {
        this.utilityService.contactFormValidationHandler();
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'contact-component',
            templateUrl: 'html/contact-us.html'
        }), 
        __metadata('design:paramtypes', [utility_service_1.UtilityService])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map