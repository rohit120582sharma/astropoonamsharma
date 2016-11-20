import { Component, Input, Output, ElementRef } from "@angular/core";

@Component({
	selector: 'header-component',
	template: `
		<div class="menuWrapper">
			<div class="container">
				<div class="row">
					<div class="col-xs-12">
						<ul class="menuLinks">
							<li><a routerLink="home">Home</a></li>
							<li><a routerLink="about">Services</a></li>
							<li class="logo"><a href="javascript:void(0);"><img src="../assets/images/logo.png"></a></li>
							<li><a routerLink="store">Store</a></li>
							<li><a routerLink="contact">Contact Me</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	`
})
export class HeaderComponent{
	constructor(private elementRef:ElementRef){
	}
	ngOnInit(){
	}
}