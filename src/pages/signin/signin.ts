import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { HomePage } from '../../pages/home/home';
import { IntroPage } from '../../pages/intro/intro';
import { ForgotpasswordPage } from '../../pages/forgotpassword/forgotpassword';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  @ViewChild('email') email;
  @ViewChild('password') password;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fire: AngularFireAuth, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {

  }

  alert(message: string) {
    this.alertCtrl.create({title: 'Info!', subTitle: message, buttons: ['OK']}).present();
  }

  signIn() {
    console.log('Sign In using, ', this.email.value, this.password.value);
    let loader = this.loadingCtrl.create({content: 'Processing'});
    loader.present();
    this.fire.auth.signInWithEmailAndPassword(this.email.value, this.password.value).then(data => {
      loader.dismiss();
      this.alert('You are logged in!');
      this.navCtrl.setRoot(HomePage);
    }).catch(error => {
      loader.dismiss();
      console.log('got an error', error);
      this.alert(error.message);
    })
  }

  signUp() {
  	this.navCtrl.push(IntroPage);
  }

  forgotPassword() {
  	this.navCtrl.push(ForgotpasswordPage);
  }

}
