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
  rootPage: any = ContactsPage;
  pages: Array<{title: string, component: any}>;

  email: string;
  displayName: string;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private afAuth: AngularFireAuth, private alertCtrl: AlertController) {
    this.initializeApp();
    
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
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  menuOpened() {    
    if (this.afAuth.auth.currentUser !== null) {
      this.email = this.afAuth.auth.currentUser.email;
      this.displayName = this.afAuth.auth.currentUser.displayName;
      console.log(this.email, this.displayName);
    }
  }

  logout() {
    this.afAuth.auth.signOut().then(data => {
      this.nav.setRoot(IntroPage);
    }).catch(error => {
      this.alertCtrl.create({title: 'Info!', subTitle: 'Unable to Sign Out!', buttons: ['OK']}).present();
    })
  }
}
