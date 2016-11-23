import { Component } from "@angular/core";
import { UtilityService } from "./utility.service";

@Component({
	selector:'app-component',
	template: `
		<router-outlet></router-outlet>
	`
})
export class AppComponent{
	constructor(private utilityService:UtilityService){
	}

	ngOnChanges(){
	}
	ngOnInit(){
	}
	ngAfterContentInit(){
	}
	ngAfterContentChecked(){
	}
	ngAfterViewInit(){
	}
	ngAfterViewChecked(){
		this.utilityService.viewportHandler();
	}
}