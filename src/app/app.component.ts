import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth';

import { IntroPage } from '../pages/intro/intro';
import { HomePage } from '../pages/home/home';
import { CountryPage } from '../pages/country/country';
import { NotesPage } from '../pages/notes/notes';
import { ContactsPage } from '../pages/contacts/contacts';
import { LadderPage } from '../pages/ladder/ladder';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = NotesPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private fire: AngularFireAuth, private alertCtrl: AlertController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Country List', component: CountryPage },
      { title: 'Notes', component: NotesPage },
      { title: 'Contacts', component: ContactsPage },
      { title: 'Ladder - Order', component: LadderPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    this.fire.auth.signOut().then(data => {
      this.nav.setRoot(IntroPage);
    }).catch(error => {
      this.alertCtrl.create({title: 'Info!', subTitle: 'Unable to Sign Out!', buttons: ['OK']}).present();
    })
  }
}
