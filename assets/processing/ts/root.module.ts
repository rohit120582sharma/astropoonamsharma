// Modules
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

// Component : View
import { MobileNavigationComponent } from "./mobile.navigation.component";
import { HeaderComponent } from "./header.component";
import { FooterComponent } from "./footer.component";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home.component";
import { AboutComponent } from "./about.component";
import { StoreComponent } from "./store.component";
import { ContactComponent } from "./contact.component";

import { SpotlightComponent } from "./spotlight.component";
import { StoreListComponent } from "./storelist.component";

// Service
import { UtilityService } from "./utility.service";
import { StoreDataService } from "./storedata.service";
import { routing } from "./app.routing";


@NgModule({
	imports: [
		BrowserModule,
		routing
	],
	providers: [
		UtilityService,
		StoreDataService
	],
	declarations: [
		AppComponent,
		MobileNavigationComponent,
		HeaderComponent,
		HomeComponent,
		AboutComponent,
		StoreComponent,
		ContactComponent,
		SpotlightComponent,
		StoreListComponent,
		FooterComponent
	],
	bootstrap: [
		MobileNavigationComponent,
		HeaderComponent,
		AppComponent,
		FooterComponent
	]
})
export class RootModule{
	constructor(){
	}
}