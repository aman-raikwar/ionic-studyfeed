import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

import { HomePage } from '../../pages/home/home';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  user_name: string = '';  
  user_email: string = '';
  user_password: string = '';

  chatUsersRef: AngularFireList<any>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private fire: AngularFireAuth, 
    private alertCtrl: AlertController, 
    public afDb: AngularFireDatabase, 
    public loadingCtrl: LoadingController) {

  }  

  signIn() {
	  this.navCtrl.pop();
  }

  showAlert(message: string) {
    this.alertCtrl.create({title: 'Info!', subTitle: message, buttons: ['OK']}).present();
  }

  signUp() {
  	console.log('Sign Up using, ', this.user_email, this.user_password);
    let loader = this.loadingCtrl.create({ content: "Processing..." });
    loader.present();
    this.fire.auth.createUserWithEmailAndPassword(this.user_email, this.user_password).then(user => {
      var that = this;
      user.updateProfile({
        displayName: that.user_name        
       }).then(function() {
        // Update successful.
         that.logUser(user);
         loader.dismiss();
         that.showAlert('Welcome ' + that.user_name + '!<br/>You are registered successfully.');
         that.navCtrl.setRoot(HomePage);      
      }, function(error) {
        // Handle Errors here.
        console.log('got an error', error);
        var errorMessage = this.getErrorMessages(error.code);      
        loader.dismiss();
        that.showAlert(errorMessage);
      });            
    }).catch(error => {
      // Handle Errors here.
      console.log('got an error', error);
      var errorMessage = this.getErrorMessages(error.code);      
      loader.dismiss();
      this.showAlert(errorMessage);
    })
  }

  logUser(user) {
    this.chatUsersRef = this.afDb.list('chat-users');
    this.chatUsersRef.push({ user_id: user.uid, user_name: user.displayName });
  }

  getErrorMessages(code) {
    var message = '';
    switch(code) {
      case 'auth/invalid-email':
        message = 'Invalid Email address!';
        break;
      case 'auth/weak-password':
        message = 'Password must be atleast 6 Characters long!';
        break;
    }

    return message;
  }

}
