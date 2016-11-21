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
var StoreDataService = (function () {
    function StoreDataService() {
        this.stores = [
            {
                "thumb": "../assets/images/portfolio/1.jpg",
                "title": "LAXMI CHARAN PADUKA",
                "description": "The product in display is Laxmi charan paduka. Devi mahalakshmi is seated on blossomed kamal flower, it is considered that establishing this at home can open the doors to fortune for the whole family."
            },
            {
                "thumb": "../assets/images/portfolio/2.jpg",
                "title": "METAL KAMDHENU COW",
                "description": "The product in display is Kamdhenu Cow made from metal and finished in silver color. It is considered as holy and divine cow and is deemed as a harbinger of bliss, prosperity, and good health."
            },
            {
                "thumb": "../assets/images/portfolio/3.jpg",
                "title": "METAL KACHAP SHRI YANTRA",
                "description": "The product in display is kachap shri yantra, which is made from metal and is finished in golden color. It is considered that establishing this yantra at home can open the doors to fortune for the whole family."
            },
            {
                "thumb": "../assets/images/portfolio/4.jpg",
                "title": "TAWIZ",
                "description": "For concentration of your child protect from nazar dosh."
            },
            {
                "thumb": "../assets/images/portfolio/5.jpg",
                "title": "SARASWATI YANTRA",
                "description": "For good education."
            },
            {
                "thumb": "../assets/images/portfolio/6.jpg",
                "title": "RUDRAKSHA BRACELET",
                "description": "For positive aura positivity cure diseases."
            },
            {
                "thumb": "../assets/images/portfolio/7.jpg",
                "title": "LAXMI DAYAK POTLI",
                "description": "For good bank balance &amp; money."
            }
        ];
    }
    StoreDataService.prototype.getStoreData = function () {
        return this.stores;
    };
    StoreDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], StoreDataService);
    return StoreDataService;
}());
exports.StoreDataService = StoreDataService;
//# sourceMappingURL=storedata.service.js.map