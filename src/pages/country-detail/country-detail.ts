import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CountryModel } from '../../components/country-model';

@Component({
  selector: 'page-country-detail',
  templateUrl: 'country-detail.html',
})
export class CountryDetailPage {
	
	selectedCountry: CountryModel = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.selectedCountry = navParams.get("country");
  	console.log(this.selectedCountry);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CountryDetailPage');
  }

}
