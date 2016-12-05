import { Component, Input, Output, ElementRef } from "@angular/core";

@Component({
	selector: 'footer-component',
	template: `
		<div class="container">
			<div class="row">
				<div class="col-xs-6 col-md-4">
					<img class="img-responsive img-footer-logo" src="assets/images/footer-logo.jpg" alt="Sai Astro Solutions" title="Sai Astro Solutions" />
				</div>
				<div class="col-xs-6 col-md-4 hidden-xs hidden-sm"></div>
				<div class="col-xs-6 col-md-4">
					<address>
						<h6>Contact Us</h6>
						<p>
							Mrs Poonam Sharma
							<br>E-mail :- <a href="mailto:info@astropoonamsharma.com">info@astropoonamsharma.com</a>
							<br>E-mail :- <a href="mailto:question@astropoonamsharma.com">question@astropoonamsharma.com</a>
							<br>Phone : <a href="tel:+91 9893553174">+91 9893553174</a>
						</p>
					</address>
					<address>
						<h6>Address</h6>
						<p>
							C70, Old Minal Residency, JK-Road
							<br>Bhopal, Madhya Pradesh, Pincode-462023
							<br>Country-India
						</p>
					</address>
				</div>
				<div class="col-xs-12">
					<div class="footerBottom">
						<p class="copyright">© 2016. All Rights Reserved.</p>
						<ul class="social-icons">
							<li><a href="#"><i class="fa fa-facebook"></i></a></li>
							<li><a href="#"><i class="fa fa-twitter"></i></a></li>
							<li><a href="#"><i class="fa fa-google-plus"></i></a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	`
})
export class FooterComponent{
	constructor(private elementRef:ElementRef){
	}
}