import { Component } from "@angular/core";
import { UtilityService } from "./utility.service";

@Component({
	selector: 'home-component',
	templateUrl: 'html/index.html'
})
export class HomeComponent{
	constructor(private utilityService:UtilityService){
	}
	ngOnInit(){
		this.utilityService.getSelectedNav().name = "home";
	}
}