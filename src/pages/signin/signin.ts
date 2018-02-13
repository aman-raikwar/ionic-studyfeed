import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { HomePage } from '../../pages/home/home';
import { IntroPage } from '../../pages/intro/intro';
import { ForgotpasswordPage } from '../../pages/forgotpassword/forgotpassword';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  user_email: string = '';
  user_password: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private fire: AngularFireAuth, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {

  }

  showAlert(message: string) {
    this.alertCtrl.create({title: 'Info!', subTitle: message, buttons: ['OK']}).present();
  }

  signIn() {
    console.log('Sign In using, ', this.user_email, this.user_password);
    let loader = this.loadingCtrl.create({content: 'Processing'});
    loader.present();
    this.fire.auth.signInWithEmailAndPassword(this.user_email, this.user_password).then(user => {
      loader.dismiss();      
      this.showAlert('Welcome ' + user.displayName + '!<br/>You are logged in.');
      this.navCtrl.setRoot(HomePage);
    }).catch(error => {
      loader.dismiss();
      console.log('got an error', error);
      this.showAlert(error.message);
    })
  }

  signInWithGoogle() {
    let loader = this.loadingCtrl.create({ content: 'Processing' });
    loader.present();
    this.fire.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(user => {      
      loader.dismiss();
      this.showAlert('Welcome ' + user.user.displayName + '!<br/>You are logged in.');
      this.navCtrl.setRoot(HomePage);
    }).catch(error => {
      loader.dismiss();
      console.log('got an error', error);
      this.showAlert(error.message);
    })
  }

  signUp() {
  	this.navCtrl.push(IntroPage);
  }

  forgotPassword() {
  	this.navCtrl.push(ForgotpasswordPage);
  }

}
