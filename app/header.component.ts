import { Component, Input, Output, ElementRef } from "@angular/core";
import { UtilityService } from "./utility.service";

@Component({
	selector: 'header-component',
	template: `
		<div class="menuWrapper">
			<div class="container">
				<div class="row">
					<div class="col-xs-12">
						<ul class="menuLinks">
							<li><a routerLink="home" [class.active]="_selectedNav.name=='home'">Home</a></li>
							<li><a routerLink="about" [class.active]="_selectedNav.name=='about'">About</a></li>
							<li class="logo"><a href="javascript:void(0);"><img src="assets/images/logo.png"></a></li>
							<li><a routerLink="store" [class.active]="_selectedNav.name=='store'">Store</a></li>
							<li><a routerLink="contact" [class.active]="_selectedNav.name=='contact'">Contact Me</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	`
})
export class HeaderComponent{
	private _selectedNav:any;

	constructor(private elementRef:ElementRef, private utilityService:UtilityService){
		this._selectedNav = this.utilityService.getSelectedNav();
	}
}