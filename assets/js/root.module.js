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
// Modules
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
// Component : View
var mobile_navigation_component_1 = require("./mobile.navigation.component");
var header_component_1 = require("./header.component");
var footer_component_1 = require("./footer.component");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home.component");
var about_component_1 = require("./about.component");
var store_component_1 = require("./store.component");
var contact_component_1 = require("./contact.component");
var spotlight_component_1 = require("./spotlight.component");
var storelist_component_1 = require("./storelist.component");
// Service
var utility_service_1 = require("./utility.service");
var storedata_service_1 = require("./storedata.service");
var app_routing_1 = require("./app.routing");
var RootModule = (function () {
    function RootModule() {
    }
    RootModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_1.routing
            ],
            providers: [
                utility_service_1.UtilityService,
                storedata_service_1.StoreDataService
            ],
            declarations: [
                app_component_1.AppComponent,
                mobile_navigation_component_1.MobileNavigationComponent,
                header_component_1.HeaderComponent,
                home_component_1.HomeComponent,
                about_component_1.AboutComponent,
                store_component_1.StoreComponent,
                contact_component_1.ContactComponent,
                spotlight_component_1.SpotlightComponent,
                storelist_component_1.StoreListComponent,
                footer_component_1.FooterComponent
            ],
            bootstrap: [
                mobile_navigation_component_1.MobileNavigationComponent,
                header_component_1.HeaderComponent,
                app_component_1.AppComponent,
                footer_component_1.FooterComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], RootModule);
    return RootModule;
}());
exports.RootModule = RootModule;
//# sourceMappingURL=root.module.js.map