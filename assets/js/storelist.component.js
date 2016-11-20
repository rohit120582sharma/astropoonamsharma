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
var storedata_service_1 = require("./storedata.service");
var StoreListComponent = (function () {
    function StoreListComponent(elementRef, utilityService, storeDataService) {
        this.elementRef = elementRef;
        this.utilityService = utilityService;
        this.storeDataService = storeDataService;
        this.stores = this.storeDataService.getStoreData();
    }
    StoreListComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.utilityService.matchHeightHandler(".compStoreItem");
            _this.utilityService.lightBoxHandler(".item-thumb");
        }, 100);
    };
    StoreListComponent = __decorate([
        core_1.Component({
            selector: '[store-list-component]',
            template: "\n\t\t<div class=\"col-xs-12 col-sm-6 col-md-4\" *ngFor=\"let store of stores\">\n\t\t\t<div class=\"compBox compStoreItem\">\n\t\t\t\t<a class=\"item-thumb\" href=\"{{store.thumb}}\" rel=\"gallery\" title=\"{{store.title}}\"><img src=\"{{store.thumb}}\"></a>\n\t\t\t\t<div class=\"item-content\">\n\t\t\t\t\t<p class=\"name\">{{store.title}}</p>\n\t\t\t\t\t<p class=\"description\">{{store.description}}</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, utility_service_1.UtilityService, storedata_service_1.StoreDataService])
    ], StoreListComponent);
    return StoreListComponent;
}());
exports.StoreListComponent = StoreListComponent;
//# sourceMappingURL=storelist.component.js.map