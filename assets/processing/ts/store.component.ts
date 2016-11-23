import { Component } from "@angular/core";
import { UtilityService } from "./utility.service";

@Component({
	selector: 'store-component',
	templateUrl: 'html/store.html'
})
export class StoreComponent{
	constructor(private utilityService:UtilityService){
	}
	ngOnInit(){
		this.utilityService.getSelectedNav().name = "store";
	}
}