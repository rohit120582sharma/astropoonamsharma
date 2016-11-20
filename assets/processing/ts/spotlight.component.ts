import { Component, Input, Output, ElementRef } from "@angular/core";

@Component({
	selector: 'spotlight-component',
	template: `
		<div class="spotlightWrapper txtWhite">
			<div class="banner-slider-list" id="slider-home">
				<div class="banner-slider-item" [ngClass]="classname">
					<div class="slider-img">
						<div class="slider-content">
							<div class="inner-text container">
								<div class="row">
									<div class="col-xs-12">
										<img *ngIf="classname == 'slider-home'" class="img-responsive img-circle astro-pic" src="../assets/images/saiastro-1.jpg">
										<h1>{{title}}</h1>
										<p>{{description}}</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ul class="slick-nav">
				<li class="icon-left-arrow">
					<i class="fa fa-arrow-circle-left"></i>
				</li>
				<li class="icon-right-arrow">
					<i class="fa fa-arrow-circle-right"></i>
				</li>
			</ul>
		</div>
	`
})
export class SpotlightComponent{
	private title:string;
	private description:string;
	private classname:string;

	constructor(private elementRef:ElementRef){
		this.title = elementRef.nativeElement.getAttribute('title');
		this.description = elementRef.nativeElement.getAttribute('description');
		this.classname = elementRef.nativeElement.getAttribute('classname');
	}
}