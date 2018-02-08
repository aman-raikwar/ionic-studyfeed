import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { HomePage } from '../../pages/home/home';
import { IntroPage } from '../../pages/intro/intro';
import { ForgotpasswordPage } from '../../pages/forgotpassword/forgotpassword';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  @ViewChild('username') username;
  @ViewChild('password') password;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fire: AngularFireAuth, private alertCtrl: AlertController) {

  }

  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  signIn() {
    console.log('Sign In using, ', this.username.value, this.password.value);
    this.fire.auth.signInWithEmailAndPassword(this.username.value, this.password.value).then(data => {
      console.log('got data', data);
      console.log(this.fire.auth.currentUser);
      this.alert('You are logged in!');
      this.navCtrl.setRoot(HomePage);
    }).catch(error => {
      console.log('got an error', error);
      this.alert(error.message);
    })
  }

  signUp() {
  	this.navCtrl.push(IntroPage);
  }

  forgotPassword() {
  	//this.navCtrl.pop();
  	this.navCtrl.push(ForgotpasswordPage);
  }

}
