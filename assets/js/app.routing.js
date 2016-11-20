"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./home.component");
var about_component_1 = require("./about.component");
var store_component_1 = require("./store.component");
var contact_component_1 = require("./contact.component");
var appRoutes = [
    {
        path: 'about',
        component: about_component_1.AboutComponent
    },
    {
        path: 'store',
        component: store_component_1.StoreComponent
    },
    {
        path: 'contact',
        component: contact_component_1.ContactComponent
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map