import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { HomePage } from '../../pages/home/home';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  @ViewChild('email') email;
  @ViewChild('password') password;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fire: AngularFireAuth, private alertCtrl: AlertController) {

  }  

  signIn() {
	  this.navCtrl.pop();
  }

  alert(message: string) {
    this.alertCtrl.create({title: 'Info!', subTitle: message, buttons: ['OK']}).present();
  }

  signUp() {
  	console.log('Sign Up using, ', this.email.value, this.password.value);
    this.fire.auth.createUserWithEmailAndPassword(this.email.value, this.password.value).then(data => {
      this.alert('Registered!')
      this.navCtrl.setRoot(HomePage);
    }).catch(error => {
      console.log('got an error', error);
      this.alert(error.message);
    })
  }

}
