import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../../pages/home/home';
import { IntroPage } from '../../pages/intro/intro';
import { ForgotpasswordPage } from '../../pages/forgotpassword/forgotpassword';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

  signIn() {
  	this.navCtrl.setRoot(HomePage);
  }

  signUp() {
  	this.navCtrl.push(IntroPage);
  }

  forgotPassword() {
  	//this.navCtrl.pop();
  	this.navCtrl.push(ForgotpasswordPage);
  }

}
