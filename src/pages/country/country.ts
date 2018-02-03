import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { RestApiProvider } from '../../providers/rest-api/rest-api';

import { CountryDetailPage } from '../../pages/country-detail/country-detail';

@Component({
  selector: 'page-country',
  templateUrl: 'country.html',
})
export class CountryPage {

  	countries: string[];
	errorMessage: string;
	descending: boolean = false;
	order: number;
	column: string = 'name';

	constructor(public navCtrl: NavController, public rest: RestApiProvider, public loadingController: LoadingController) {

	}

	ionViewDidLoad() {
	  	this.getCountries();
	}

	getCountries() {
		let loader = this.loadingController.create({content: "Loading Countries..."});  
		loader.present();
		this.rest.getCountries().subscribe(countries => this.countries = countries, error =>  this.errorMessage = <any>error, ()=>{
			loader.dismiss();
		});
	}

	sort() {
		this.descending = !this.descending;
		this.order = this.descending ? 1 : -1;
	}

	onSelect(item) {
    	this.navCtrl.push(CountryDetailPage, { country: item });
  	}

}
