import { Component } from "@angular/core";

@Component({
	selector: '[header-navigation-component]',
	template: `
		<div class="container">
			<div class="row">
				<div class="col-xs-12">
					<ul class="menuLinks">
						<li><a href="#">Home</a></li>
						<li><a href="#">Services</a></li>
						<li class="logo"><a href="#"><img src="../assets/images/logo.png"></a></li>
						<li><a href="#">Store</a></li>
						<li><a href="#">Contact Me</a></li>
					</ul>
				</div>
			</div>
		</div>
	`
})
export class HeaderNavigationComponent{
	constructor(){
	}
}