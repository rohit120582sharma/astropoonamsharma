import { Component } from "@angular/core";
import { HeaderNavigationComponent } from "./header.navigation.component";

@Component({
	selector: '[header-component]',
	directives: [HeaderNavigationComponent],
	template: `
		<div class="menuWrapper" header-navigation-component></div>
	`
})
export class HeaderComponent{
	constructor(){
	}
}