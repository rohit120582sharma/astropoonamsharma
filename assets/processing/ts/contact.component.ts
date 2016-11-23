import { Component } from "@angular/core";
import { UtilityService } from "./utility.service";

@Component({
	selector: 'contact-component',
	templateUrl: 'html/contact-us.html'
})
export class ContactComponent{
	constructor(private utilityService:UtilityService){
	}
	ngOnInit(){
		this.utilityService.getSelectedNav().name = "contact";
	}
	ngAfterViewInit(){
		this.utilityService.contactFormValidationHandler();
	}
}