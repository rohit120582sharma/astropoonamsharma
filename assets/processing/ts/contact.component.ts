import { Component } from "@angular/core";
import { UtilityService } from "./utility.service";

@Component({
	selector: 'contact-component',
	templateUrl: 'html/contact-us.html'
})
export class ContactComponent{
	constructor(private utilityService:UtilityService){
	}
	ngAfterViewInit(){
		this.utilityService.contactFormValidationHandler();
	}
}