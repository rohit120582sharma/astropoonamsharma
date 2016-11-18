import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { MobileNavigationComponent } from "./mobile.navigation.component";
import { HeaderComponent } from "./header.component";
import { StoreListComponent } from "./storelist.component";
import { FooterComponent } from "./footer.component";

@NgModule({
	imports: [BrowserModule],
	declarations: [StoreListComponent, MobileNavigationComponent, HeaderComponent, FooterComponent],
	bootstrap: [MobileNavigationComponent, HeaderComponent, FooterComponent]
})
export class RootModule{
	constructor(){
	}
}