import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { IntroPage } from '../../pages/intro/intro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  email: string;

  constructor(public navCtrl: NavController, private fire: AngularFireAuth) {
    console.log(fire.auth.currentUser);
    if (fire.auth.currentUser == null) {
      this.navCtrl.setRoot(IntroPage);
    } else {
      this.email = fire.auth.currentUser.email;
    }
  }

}
