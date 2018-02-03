import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SignupPage } from '../../pages/signup/signup';
import { SigninPage } from '../../pages/signin/signin';
import { HomePage } from '../../pages/home/home';

@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html',
})
export class IntroPage {

  	constructor(public navCtrl: NavController, public navParams: NavParams) {  }

  	slides = [
	    {
	      title: "Welcome to Studyfeed!",
	      description: "<b>JOIN</b><br/><b>LEARN</b><br/><b>STUDY</b>",
	      image: "assets/imgs/logo-2.png",
	    },
	    {
	      title: "What is Studyfeed?",
	      description: "<b>Studyfeed</b> is for Students, Professionals to get help from Others about their questions. Better answers for your questions from Highly Experienced Professionals on the fly.",
	      image: "assets/imgs/logo-2.png",
	    },
	    {
	      title: "Posts, Classmates, Chat",
	      description: "You can Post, Like, Comments, View all your Classmates. Chat with your Classmates. View Profile of Classmates and so on.",
	      image: "assets/imgs/logo-2.png",
	    }
  	];

  	navHome() {
    	this.navCtrl.setRoot(HomePage);
  	}

  	openSignUpPage() {
		this.navCtrl.push(SignupPage);
  	}

  	openSignInPage() {
		this.navCtrl.push(SigninPage);
  	}

}
