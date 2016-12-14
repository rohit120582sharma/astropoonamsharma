import { Component, Input, Output, ElementRef } from "@angular/core";
import { UtilityService } from "./utility.service";
import { StoreDataService } from "./storedata.service";

@Component({
	selector: '[store-list-component]',
	providers: [StoreDataService],
	template: `
		<div class="col-xs-12 col-sm-6 col-md-4" *ngFor="let store of stores">
			<div class="compBox compStoreItem">
				<a class="item-thumb" href="{{store.thumb}}" rel="gallery" title="{{store.title}}"><img src="{{store.thumb}}"></a>
				<div class="item-content">
					<p class="name">{{store.title}}</p>
					<p class="description">{{store.description}}</p>
				</div>
			</div>
		</div>
	`
})
export class StoreListComponent{
	public stores:any;

	constructor(private elementRef:ElementRef, private utilityService:UtilityService, private storeDataService:StoreDataService){
		this.stores = this.storeDataService.getStoreData();
	}
	ngAfterViewInit(){
		setTimeout(()=>{
			this.utilityService.matchHeightHandler(".compStoreItem");
			this.utilityService.lightBoxHandler(".item-thumb");
		}, 100);
	}
}