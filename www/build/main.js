webpackJsonp([0],{

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_signup_signup__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_signin_signin__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IntroPage = (function () {
    function IntroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.skipMsg = "Skip";
        this.state = 'x';
    }
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
    IntroPage.prototype.navHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    IntroPage.prototype.openSignUpPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_signup_signup__["a" /* SignupPage */]);
    };
    IntroPage.prototype.openSignInPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_signin_signin__["a" /* SigninPage */]);
    };
    IntroPage.prototype.slideMoved = function () {
        if (this.slides.getActiveIndex() >= this.slides.getPreviousIndex())
            this.state = 'rightSwipe';
        else
            this.state = 'leftSwipe';
    };
    IntroPage.prototype.animationDone = function () {
        this.state = 'x';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */])
    ], IntroPage.prototype, "slides", void 0);
    IntroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-intro',template:/*ion-inline-start:"/home/aman/Desktop/Ionic/ionic-studyfeed/src/pages/intro/intro.html"*/'<ion-content>\n  <ion-slides pager (ionSlideDrag)="slideMoved()">\n    <ion-slide>\n      <div class="diag" style="background: url(\'assets/imgs/whitebg.svg\') no-repeat">\n        <ion-icon ios="ios-analytics" md="md-analytics" color="primary" [@bounce]=\'state\' (@bounce.done)="animationDone()"></ion-icon>\n      </div>\n      <div [@bounce]=\'state\'>\n        <h2>track your routine</h2>\n        <p>whether it\'s sets, reps, weight used, you can track it all with our intuitive interface.</p>\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <div class="diag" style="background: url(\'assets/imgs/whitebg.svg\') no-repeat">\n        <ion-icon ios="ios-trophy" md="md-trophy" color="primary" [@bounce]=\'state\'></ion-icon>\n      </div>\n      <div [@bounce]=\'state\'>\n        <h2>set personal goals</h2>\n        <p>we\'re all in the gym for a reason: goals. set goals for diet and fitness.</p>\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <div class="diag" style="background: url(\'assets/imgs/whitebg.svg\') no-repeat">\n        <ion-icon ios="ios-chatboxes" md="md-chatboxes" color="primary" [@bounce]=\'state\'></ion-icon>\n      </div>\n      <div [@bounce]=\'state\'>\n        <h2>chat with others</h2>\n        <p>inspire and help each other reach fitness and diet goals.</p>\n      </div>\n    </ion-slide>\n  </ion-slides>  \n  <div class="bottom-accounts-btns">\n    <button ion-button icon-start (click)="openSignUpPage()">Sign Up</button>\n    <button ion-button icon-end (click)="openSignInPage()">Sign In</button>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/aman/Desktop/Ionic/ionic-studyfeed/src/pages/intro/intro.html"*/,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* trigger */])('bounce', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* style */])({
                        transform: 'translateX(0)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* transition */])('* => rightSwipe', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* animate */])('700ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* style */])({ transform: 'translateX(0)', offset: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* style */])({ transform: 'translateX(-65px)', offset: .3 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* style */])({ transform: 'translateX(0)', offset: 1 })
                    ]))),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* transition */])('* => leftSwipe', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* animate */])('700ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* keyframes */])([
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* style */])({ transform: 'translateX(0)', offset: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* style */])({ transform: 'translateX(65px)', offset: .3 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* style */])({ transform: 'translateX(0)', offset: 1 })
                    ])))
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], IntroPage);
    return IntroPage;
}());

//# sourceMappingURL=intro.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_intro_intro__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_forgotpassword_forgotpassword__ = __webpack_require__(317);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SigninPage = (function () {
    function SigninPage(navCtrl, navParams, fire, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fire = fire;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.user_email = '';
        this.user_password = '';
    }
    SigninPage.prototype.showAlert = function (message) {
        this.alertCtrl.create({ title: 'Info!', subTitle: message, buttons: ['OK'] }).present();
    };
    SigninPage.prototype.signIn = function () {
        var _this = this;
        console.log('Sign In using, ', this.user_email, this.user_password);
        var loader = this.loadingCtrl.create({ content: 'Processing' });
        loader.present();
        this.fire.auth.signInWithEmailAndPassword(this.user_email, this.user_password).then(function (user) {
            loader.dismiss();
            _this.showAlert('Welcome ' + user.displayName + '!<br/>You are logged in.');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
        }).catch(function (error) {
            loader.dismiss();
            console.log('got an error', error);
            _this.showAlert(error.message);
        });
    };
    SigninPage.prototype.signInWithGoogle = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({ content: 'Processing' });
        loader.present();
        this.fire.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].GoogleAuthProvider()).then(function (user) {
            loader.dismiss();
            _this.showAlert('Welcome ' + user.user.displayName + '!<br/>You are logged in.');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
        }).catch(function (error) {
            loader.dismiss();
            console.log('got an error', error);
            _this.showAlert(error.message);
        });
    };
    SigninPage.prototype.signUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_intro_intro__["a" /* IntroPage */]);
    };
    SigninPage.prototype.forgotPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */]);
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"/home/aman/Desktop/Ionic/ionic-studyfeed/src/pages/signin/signin.html"*/'<ion-content padding>\n  <ion-list class="login-container">\n    <h2 class="page-header">Sign In</h2>\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input type="text" [(ngModel)]="user_email"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="user_password"></ion-input>\n    </ion-item>\n    <button ion-button block color="primary" (click)="signIn()">Submit</button>\n    <!-- <h2 class="page-header">Sign In using Social</h2>\n    <button ion-button icon-only (click)="signInWithGoogle()">\n      <ion-icon name="logo-googleplus"></ion-icon>\n    </button> -->\n    <!-- <button class="back-to" (click)="forgotPassword()">Forgot Password ?</button> -->\n    <button class="back-to" (click)="signUp()">Don\'t have account, Click here!</button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/aman/Desktop/Ionic/ionic-studyfeed/src/pages/signin/signin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 176:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 176;

/***/ }),

/***/ 220:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 220;

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, fire, alertCtrl, afDb, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fire = fire;
        this.alertCtrl = alertCtrl;
        this.afDb = afDb;
        this.loadingCtrl = loadingCtrl;
        this.user_name = '';
        this.user_email = '';
        this.user_password = '';
    }
    SignupPage.prototype.signIn = function () {
        this.navCtrl.pop();
    };
    SignupPage.prototype.showAlert = function (message) {
        this.alertCtrl.create({ title: 'Info!', subTitle: message, buttons: ['OK'] }).present();
    };
    SignupPage.prototype.signUp = function () {
        var _this = this;
        console.log('Sign Up using, ', this.user_email, this.user_password);
        var loader = this.loadingCtrl.create({ content: "Processing..." });
        loader.present();
        this.fire.auth.createUserWithEmailAndPassword(this.user_email, this.user_password).then(function (user) {
            var that = _this;
            user.updateProfile({
                displayName: that.user_name
            }).then(function () {
                // Update successful.
                that.logUser(user);
                loader.dismiss();
                that.showAlert('Welcome ' + that.user_name + '!<br/>You are registered successfully.');
                that.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
            }, function (error) {
                // Handle Errors here.
                console.log('got an error', error);
                var errorMessage = this.getErrorMessages(error.code);
                loader.dismiss();
                that.showAlert(errorMessage);
            });
        }).catch(function (error) {
            // Handle Errors here.
            console.log('got an error', error);
            var errorMessage = _this.getErrorMessages(error.code);
            loader.dismiss();
            _this.showAlert(errorMessage);
        });
    };
    SignupPage.prototype.logUser = function (user) {
        this.chatUsersRef = this.afDb.list('chat-users');
        this.chatUsersRef.push({ user_id: user.uid, user_name: user.displayName });
    };
    SignupPage.prototype.getErrorMessages = function (code) {
        var message = '';
        switch (code) {
            case 'auth/invalid-email':
                message = 'Invalid Email address!';
                break;
            case 'auth/weak-password':
                message = 'Password must be atleast 6 Characters long!';
                break;
        }
        return message;
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/home/aman/Desktop/Ionic/ionic-studyfeed/src/pages/signup/signup.html"*/'<ion-content padding>\n  <ion-list class="login-container">\n    <h2 class="page-header">Sign Up</h2>\n    <ion-item>\n      <ion-label floating>Name</ion-label>\n      <ion-input type="text" [(ngModel)]="user_name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input type="email" [(ngModel)]="user_email"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="user_password"></ion-input>\n    </ion-item>\n    <button ion-button block color="primary" (click)="signUp()">Submit</button>\n    <button class="back-to" (click)="signIn()">Click here to Sign In!</button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/aman/Desktop/Ionic/ionic-studyfeed/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_signin_signin__ = __webpack_require__(163);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ForgotpasswordPage = (function () {
    function ForgotpasswordPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ForgotpasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotpasswordPage');
    };
    ForgotpasswordPage.prototype.signIn = function () {
        //this.navCtrl.pop();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_signin_signin__["a" /* SigninPage */]);
    };
    ForgotpasswordPage.prototype.forgotPassword = function () {
    };
    ForgotpasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-forgotpassword',template:/*ion-inline-start:"/home/aman/Desktop/Ionic/ionic-studyfeed/src/pages/forgotpassword/forgotpassword.html"*/'<ion-content padding>\n  <img src="assets/imgs/logo-2.png" class="slide-image" />\n  <ion-list class="login-container">\n    <h2 class="page-header">Forgot Password</h2>\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input type="text" value=""></ion-input>\n    </ion-item>\n    <button ion-button block color="primary" (click)="forgotPassword()">Send</button>\n    <button class="back-to" (click)="signIn()">Back to Sign In</button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/aman/Desktop/Ionic/ionic-studyfeed/src/pages/forgotpassword/forgotpassword.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ForgotpasswordPage);
    return ForgotpasswordPage;
}());

//# sourceMappingURL=forgotpassword.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_api_rest_api__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_country_detail_country_detail__ = __webpack_require__(332);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CountryPage = (function () {
    function CountryPage(navCtrl, rest, loadingController) {
        this.navCtrl = navCtrl;
        this.rest = rest;
        this.loadingController = loadingController;
        this.descending = false;
        this.column = 'name';
    }
    CountryPage.prototype.ionViewDidLoad = function () {
        this.getCountries();
    };
    CountryPage.prototype.getCountries = function () {
        var _this = this;
        var loader = this.loadingController.create({ content: "Loading Countries..." });
        loader.present();
        this.rest.getCountries().subscribe(function (countries) { return _this.countries = countries; }, function (error) { return _this.errorMessage = error; }, function () {
            loader.dismiss();
        });
    };
    CountryPage.prototype.sort = function () {
        this.descending = !this.descending;
        this.order = this.descending ? 1 : -1;
    };
    CountryPage.prototype.onSelect = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_country_detail_country_detail__["a" /* CountryDetailPage */], { country: item });
    };
    CountryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-country',template:/*ion-inline-start:"/home/aman/Desktop/Ionic/ionic-studyfeed/src/pages/country/country.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Country List</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="sort()">\n        <ion-icon name="funnel"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-searchbar [(ngModel)]="terms"></ion-searchbar>\n  <ion-list>\n    <ion-item *ngFor="let c of countries | search : terms | sort: {property: column, order: order}" (click)="onSelect(c)" [class.selected]="c === selectedCountry">\n      <ion-avatar item-left>\n        <img src="{{c.flag}}">\n      </ion-avatar>\n      <h2>{{c.name}}</h2>\n      <p>Capital: {{c.capital}}, Region: {{c.region}}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/aman/Desktop/Ionic/ionic-studyfeed/src/pages/country/country.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_api_rest_api__["a" /* RestApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], CountryPage);
    return CountryPage;
}());

//# sourceMappingURL=country.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RestApiProvider = (function () {
    function RestApiProvider(http) {
        this.http = http;
        this.apiUrl = 'https://restcountries.eu/rest/v2/all';
        console.log('Hello RestApiProvider Provider');
    }
    RestApiProvider.prototype.getCountries = function () {
        return this.http.get(this.apiUrl).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(this.extractData), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["catchError"])(this.handleError));
    };
    RestApiProvider.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    RestApiProvider.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var err = error || '';
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    RestApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RestApiProvider);
    return RestApiProvider;
}());

//# sourceMappingURL=rest-api.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CountryDetailPage = (function () {
    function CountryDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.selectedCountry = null;
        this.selectedCountry = navParams.get("country");
        console.log(this.selectedCountry);
    }
    CountryDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CountryDetailPage');
    };
    CountryDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-country-detail',template:/*ion-inline-start:"/home/aman/Desktop/Ionic/ionic-studyfeed/src/pages/country-detail/country-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{selectedCountry.name}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <img src="{{selectedCountry.flag}}">\n</ion-content>\n'/*ion-inline-end:"/home/aman/Desktop/Ionic/ionic-studyfeed/src/pages/country-detail/country-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CountryDetailPage);
    return CountryDetailPage;
}());

//# sourceMappingURL=country-detail.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotesPage = (function () {
    function NotesPage(navCtrl, navParams, alertCtrl, afDB) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.notesRef = afDB.list('notes');
        // Use snapshotChanges().map() to store the key
        this.notes = this.notesRef.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    }
    NotesPage.prototype.addNote = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Add Note',
            inputs: [{ name: 'title', placeholder: 'Title' }],
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Add',
                    handler: function (data) {
                        _this.notesRef.push({ name: data.title });
                    }
                }
            ]
        });
        prompt.present();
    };
    NotesPage.prototype.editNote = function (note) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Edit Note',
            inputs: [{ name: 'title', placeholder: 'Title', value: note.name }],
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.notesRef.update(note.key, { name: data.title });
                    }
                }
            ]
        });
        prompt.present();
    };
    NotesPage.prototype.deleteNote = function (key) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Note',
            message: 'Confirm to delete this Note',
            buttons: [
                {
                    text: 'No'
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.notesRef.remove(key);
                    }
                }
            ]
        });
        confirm.present();
    };
    NotesPage.prototype.deleteAllNotes = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Note',
            message: 'Confirm to delete All Notes',
            buttons: [
                {
                    text: 'No'
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.notesRef.remove();
                    }
                }
            ]
        });
        confirm.present();
    };
    NotesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-notes',template:/*ion-inline-start:"/home/aman/Desktop/Ionic/ionic-studyfeed/src/pages/notes/notes.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Notes</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="addNote()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n      <button ion-button icon-only (click)="deleteAllNotes()">\n        <ion-icon name="trash"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-list>\n    <ion-item-sliding *ngFor="let note of notes | async">\n      <ion-item>\n        {{note.name}}\n      </ion-item>\n      <ion-item-options>\n        <button ion-button icon-only (click)="editNote(note)" light>\n          <ion-icon name="paper"></ion-icon>\n        </button>\n        <button ion-button icon-only (click)="deleteNote(note.key)" danger>\n          <ion-icon name="trash"></ion-icon>\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/aman/Desktop/Ionic/ionic-studyfeed/src/pages/notes/notes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], NotesPage);
    return NotesPage;
}());

//# sourceMappingURL=notes.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chat_chat__ = __webpack_require__(335);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactsPage = (function () {
    function ContactsPage(navCtrl, navParams, alertCtrl, afDB) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.groupedContacts = [];
        this.chatUsersRef = afDB.list('chat-users');
        this.chatUsers = this.chatUsersRef.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        // this.contacts = [
        //     'Kate Beckett',
        //     'Richard Castle',
        //     'Alexis Castle',
        //     'Lanie Parish',
        //     'Javier Esposito',
        //     'Kevin Ryan',
        //     'Martha Rodgers',
        //     'Roy Montgomery',
        //     'Jim Beckett',
        //     'Stana Katic',
        //     'Nathan Fillion',
        //     'Molly Quinn',
        //     'Tamala Jones',
        //     'Jon Huertas',
        //     'Seamus Dever',
        //     'Susan Sullivan'
        // ];
        // this.groupContacts(this.contacts);
    }
    ContactsPage.prototype.onSelect = function (user) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__chat_chat__["a" /* ChatPage */], { user: user });
    };
    ContactsPage.prototype.groupContacts = function (contacts) {
        var _this = this;
        var sortedContacts = contacts.sort();
        var currentLetter = false;
        var currentContacts = [];
        sortedContacts.forEach(function (value, index) {
            if (value.charAt(0) != currentLetter) {
                currentLetter = value.charAt(0);
                var newGroup = {
                    letter: currentLetter,
                    contacts: []
                };
                currentContacts = newGroup.contacts;
                _this.groupedContacts.push(newGroup);
            }
            currentContacts.push(value);
        });
    };
    ContactsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-contacts',template:/*ion-inline-start:"/home/aman/Desktop/Ionic/ionic-studyfeed/src/pages/contacts/contacts.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Contacts</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let user of chatUsers | async" (click)="onSelect(user)">\n      <ion-avatar item-start>\n        <img src="assets/imgs/avatar.png">\n      </ion-avatar>\n      <h2>{{user.user_name}}</h2>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/aman/Desktop/Ionic/ionic-studyfeed/src/pages/contacts/contacts.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _d || Object])
    ], ContactsPage);
    return ContactsPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=contacts.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatPage = (function () {
    function ChatPage(navCtrl, navParams, afDb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afDb = afDb;
        this.user_id = '1';
        this.message = '';
        this.user = navParams.get("user");
        console.log(this.user);
        this.chatMessagesRef = afDb.list('chat-messages');
        // Use snapshotChanges().map() to store the key
        this.chatMessagesList = this.chatMessagesRef.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        console.clear();
        console.log("Chat Messages =>> ", this.chatMessagesList);
    }
    ChatPage.prototype.sendMessage = function () {
        var _this = this;
        this.afDb.list('/chat-messages').push({
            user_id: this.user_id,
            user_message: this.message
        }).then(function () {
            // Message Sent Successfully
            _this.message = '';
            //}).catch(error => {
            // If error occurs or Firebase is unreachable
        });
    };
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"/home/aman/Desktop/Ionic/ionic-studyfeed/src/pages/chat/chat.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Chat</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <div *ngFor="let chatMessage of chatMessagesList | async" class="messages">\n    <div [class]="chatMessage.user_id == user_id ? \'message right\' : \'message left\'">\n      {{ chatMessage.user_message }}\n    </div>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-item>\n    <ion-input type="text" placeholder="Type your message..." [(ngModel)]="message"></ion-input>\n    <button ion-button clear item-right (click)="sendMessage()">\n      <ion-icon name="send"></ion-icon>\n    </button>\n  </ion-item>\n</ion-footer>\n'/*ion-inline-end:"/home/aman/Desktop/Ionic/ionic-studyfeed/src/pages/chat/chat.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _c || Object])
    ], ChatPage);
    return ChatPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LadderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LadderPage = (function () {
    function LadderPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ladder = [
            'Adelaide',
            'Collingwood',
            'Essendon',
            'Hawthorn',
            'Carlton',
            'Sydney',
            'Western Bulldogs',
            'West Coast',
            'Fremantle',
            'North Melbourne',
            'Richmond',
            'Greater Western Sydney',
            'St Kilda',
            'Geelong',
            'Brisbane',
            'Melbourne',
            'Port Adelaide',
            'Gold Coast'
        ];
    }
    LadderPage.prototype.reorderItems = function (indexes) {
        this.ladder = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* reorderArray */])(this.ladder, indexes);
    };
    LadderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-ladder',template:/*ion-inline-start:"/home/aman/Desktop/Ionic/ionic-studyfeed/src/pages/ladder/ladder.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Ladder</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-list reorder="true" (ionItemReorder)="reorderItems($event)">\n    <ion-item *ngFor="let team of ladder; let i = index;">{{i+1}}. {{team}}</ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/aman/Desktop/Ionic/ionic-studyfeed/src/pages/ladder/ladder.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], LadderPage);
    return LadderPage;
}());

//# sourceMappingURL=ladder.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(346);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipes_search_search__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pipes_sort_sort__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_intro_intro__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_signin_signin__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_forgotpassword_forgotpassword__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_home_home__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_country_country__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_country_detail_country_detail__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_notes_notes__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_contacts_contacts__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_ladder_ladder__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_chat_chat__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_rest_api_rest_api__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_platform_browser_animations__ = __webpack_require__(567);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_intro_intro__["a" /* IntroPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_country_country__["a" /* CountryPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_country_detail_country_detail__["a" /* CountryDetailPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_notes_notes__["a" /* NotesPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_contacts_contacts__["a" /* ContactsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_ladder_ladder__["a" /* LadderPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_8__pipes_search_search__["a" /* SearchPipe */],
                __WEBPACK_IMPORTED_MODULE_9__pipes_sort_sort__["a" /* SortPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_25__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_11__pages_intro_intro__["a" /* IntroPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_country_country__["a" /* CountryPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_country_detail_country_detail__["a" /* CountryDetailPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_notes_notes__["a" /* NotesPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_contacts_contacts__["a" /* ContactsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_ladder_ladder__["a" /* LadderPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_chat_chat__["a" /* ChatPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_24__providers_rest_api_rest_api__["a" /* RestApiProvider */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBRxwPPeiSSg2kP-L_gZ_iKSAKiRTPoiGg",
        authDomain: "studyfeed-67293.firebaseapp.com",
        databaseURL: "https://studyfeed-67293.firebaseio.com",
        projectId: "studyfeed-67293",
        storageBucket: "studyfeed-67293.appspot.com",
        messagingSenderId: "438371469411"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (items, terms) {
        if (!items)
            return [];
        if (!terms)
            return items;
        terms = terms.toLowerCase();
        return items.filter(function (it) {
            return it.name.toLowerCase().includes(terms);
        });
    };
    SearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'search',
        })
    ], SearchPipe);
    return SearchPipe;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortPipe = (function () {
    function SortPipe() {
    }
    SortPipe.prototype.transform = function (array, args) {
        return array.sort(function (a, b) {
            if (a[args.property] < b[args.property]) {
                return -1 * args.order;
            }
            else if (a[args.property] > b[args.property]) {
                return 1 * args.order;
            }
            else {
                return 0;
            }
        });
    };
    SortPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'sort',
        })
    ], SortPipe);
    return SortPipe;
}());

//# sourceMappingURL=sort.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_intro_intro__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_country_country__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_notes_notes__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_contacts_contacts__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_ladder_ladder__ = __webpack_require__(336);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, afAuth, alertCtrl) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.afAuth = afAuth;
        this.alertCtrl = alertCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_contacts_contacts__["a" /* ContactsPage */];
        this.initializeApp();
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */] },
            { title: 'Country List', component: __WEBPACK_IMPORTED_MODULE_7__pages_country_country__["a" /* CountryPage */] },
            { title: 'Notes', component: __WEBPACK_IMPORTED_MODULE_8__pages_notes_notes__["a" /* NotesPage */] },
            { title: 'Contacts', component: __WEBPACK_IMPORTED_MODULE_9__pages_contacts_contacts__["a" /* ContactsPage */] },
            { title: 'Ladder - Order', component: __WEBPACK_IMPORTED_MODULE_10__pages_ladder_ladder__["a" /* LadderPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.menuOpened = function () {
        if (this.afAuth.auth.currentUser !== null) {
            this.email = this.afAuth.auth.currentUser.email;
            this.displayName = this.afAuth.auth.currentUser.displayName;
            console.log(this.email, this.displayName);
        }
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        this.afAuth.auth.signOut().then(function (data) {
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_intro_intro__["a" /* IntroPage */]);
        }).catch(function (error) {
            _this.alertCtrl.create({ title: 'Info!', subTitle: 'Unable to Sign Out!', buttons: ['OK'] }).present();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/aman/Desktop/Ionic/ionic-studyfeed/src/app/app.html"*/'<ion-menu [content]="content" (ionOpen)="menuOpened()">\n  <ion-content>\n    <div class="profile-area" padding>\n      <img src="assets/imgs/avatar.png" />\n      <p class="user-name">Hello {{displayName}}!</p>\n      <!-- <ion-buttons end>\n        <button ion-button icon-only (click)="sort()">\n          <ion-icon name="funnel"></ion-icon>\n        </button>\n      </ion-buttons> -->\n    </div>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n      <button menuClose ion-item (click)="logout()">\n        Sign Out\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/aman/Desktop/Ionic/ionic-studyfeed/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/aman/Desktop/Ionic/ionic-studyfeed/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n</ion-content>\n'/*ion-inline-end:"/home/aman/Desktop/Ionic/ionic-studyfeed/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[338]);
//# sourceMappingURL=main.js.map