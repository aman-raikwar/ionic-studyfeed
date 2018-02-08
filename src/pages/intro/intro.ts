import { Component, ViewChild, trigger, transition, style, state, animate, keyframes } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';

import { SignupPage } from '../../pages/signup/signup';
import { SigninPage } from '../../pages/signin/signin';
import { HomePage } from '../../pages/home/home';

@Component({
	selector: 'page-intro',
	templateUrl: 'intro.html',
	animations: [
		trigger('bounce', [
			state('*', style({
				transform: 'translateX(0)'
			})),
			transition('* => rightSwipe', animate('700ms ease-out', keyframes([
				style({ transform: 'translateX(0)', offset: 0 }),
				style({ transform: 'translateX(-65px)', offset: .3 }),
				style({ transform: 'translateX(0)', offset: 1 })
			]))),
			transition('* => leftSwipe', animate('700ms ease-out', keyframes([
				style({ transform: 'translateX(0)', offset: 0 }),
				style({ transform: 'translateX(65px)', offset: .3 }),
				style({ transform: 'translateX(0)', offset: 1 })
			])))
		])
	]
})

export class IntroPage {
	@ViewChild(Slides) slides: Slides;
	skipMsg: string = "Skip";
	state: string = 'x';

	constructor(public navCtrl: NavController, public navParams: NavParams) { }

	// slides = [
	// 	{
	// 		title: "Welcome to Studyfeed!",
	// 		description: "<b>JOIN</b><br/><b>LEARN</b><br/><b>STUDY</b>",
	// 		image: "assets/imgs/logo-2.png",
	// 	},
	// 	{
	// 		title: "What is Studyfeed?",
	// 		description: "<b>Studyfeed</b> is for Students, Professionals to get help from Others about their questions. Better answers for your questions from Highly Experienced Professionals on the fly.",
	// 		image: "assets/imgs/logo-2.png",
	// 	},
	// 	{
	// 		title: "Posts, Classmates, Chat",
	// 		description: "You can Post, Like, Comments, View all your Classmates. Chat with your Classmates. View Profile of Classmates and so on.",
	// 		image: "assets/imgs/logo-2.png",
	// 	}
	// ];

	navHome() {
		this.navCtrl.setRoot(HomePage);
	}

	openSignUpPage() {
		this.navCtrl.push(SignupPage);
	}

	openSignInPage() {
		this.navCtrl.push(SigninPage);
	}

	slideMoved() {
		if (this.slides.getActiveIndex() >= this.slides.getPreviousIndex())
			this.state = 'rightSwipe';
		else
			this.state = 'leftSwipe';
	}

	animationDone() {
		this.state = 'x';
	}

}
