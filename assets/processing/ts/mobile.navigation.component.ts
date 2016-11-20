import { Component, Input, Output, ElementRef } from "@angular/core";
import { UtilityService } from "./utility.service";

@Component({
	selector: 'mobile-navigation-component',
	template: `
		<div class="mobileHeader yellowGradient">
			<div class="mobile-nav-icon">
	            <ul>
	            	<li class="first"></li>
	                <li class="second"></li>
	                <li class="third"></li>
	            </ul>
	        </div>
			<div class="mobileMenuWrapper">
				<ul class="menuLinks">
					<li><a href="javascript:void(0);"></a></li>
					<li><a routerLink="home">Home</a></li>
					<li><a routerLink="about">Services</a></li>
					<li><a routerLink="store">Store</a></li>
					<li><a routerLink="contact">Contact Me</a></li>
				</ul>
				<ul class="social-icons">
					<li><a href="#"><i class="fa fa-facebook"></i></a></li>
					<li><a href="#"><i class="fa fa-twitter"></i></a></li>
					<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
				</ul>
			</div>
		</div>
	`
})
export class MobileNavigationComponent{
	constructor(private elementRef:ElementRef, private utilityService:UtilityService){
	}
	ngAfterViewInit(){
		/* ------------------ Hamburger ------------------ */
		this.utilityService.hamburgerHandler();
	}
}