import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home.component";
import { AboutComponent } from "./about.component";
import { StoreComponent } from "./store.component";
import { ContactComponent } from "./contact.component";

const appRoutes:any = [
	{
		'path':'about',
		'component': AboutComponent
	},
	{
		'path':'store',
		'component': StoreComponent
	},
	{
		'path':'contact',
		'component': ContactComponent
	},
	{
		'path':'home',
		'component': HomeComponent
	},
	{
		'path':'',
		'pathMatch': 'full',
		'redirectTo':'home'
	}
];

export const routing = RouterModule.forRoot(appRoutes);