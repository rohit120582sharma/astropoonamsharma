import { Component } from "@angular/core";
import { UtilityService } from "./utility.service";

@Component({
	selector: 'about-component',
	templateUrl: 'html/about-me.html'
})
export class AboutComponent{
	constructor(private utilityService:UtilityService){
	}
	ngOnInit(){
		this.utilityService.getSelectedNav().name = "about";
	}
}