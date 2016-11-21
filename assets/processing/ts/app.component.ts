import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector:'app-component',
	template: `
		<router-outlet></router-outlet>
	`
})
export class AppComponent{
	constructor(private router: Router){
		this.router.events.subscribe((event) => {
			console.log('route changed');
		});
	}
	ngAfterViewInit(){
	}
}