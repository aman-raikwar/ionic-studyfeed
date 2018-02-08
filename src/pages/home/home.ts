import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  email: string;

  constructor(public navCtrl: NavController, private fire: AngularFireAuth) {
  	this.email = fire.auth.currentUser.email;
  	console.log(fire.auth.currentUser);
  }  

}
