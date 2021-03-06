import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AngularFireModule } from 'angularfire2'
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from '../pipes/search/search';
import { SortPipe } from '../pipes/sort/sort';

import { MyApp } from './app.component';
import { IntroPage } from '../pages/intro/intro';
import { SignupPage } from '../pages/signup/signup';
import { SigninPage } from '../pages/signin/signin';
import { ForgotpasswordPage } from '../pages/forgotpassword/forgotpassword';
import { HomePage } from '../pages/home/home';
import { CountryPage } from '../pages/country/country';
import { CountryDetailPage } from '../pages/country-detail/country-detail';
import { NotesPage } from '../pages/notes/notes';
import { ContactsPage } from '../pages/contacts/contacts';
import { LadderPage } from '../pages/ladder/ladder';
import { ChatPage } from '../pages/chat/chat';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestApiProvider } from '../providers/rest-api/rest-api';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    MyApp,
    IntroPage,
    SignupPage,
    SigninPage,
    ForgotpasswordPage,
    HomePage,
    CountryPage,
    CountryDetailPage,
    NotesPage,
    ContactsPage,
    LadderPage,
    ChatPage,
    SearchPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireDatabaseModule,
    BrowserAnimationsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IntroPage,
    SignupPage,
    SigninPage,
    ForgotpasswordPage,
    HomePage,
    CountryPage,
    CountryDetailPage,
    NotesPage,
    ContactsPage,
    LadderPage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    RestApiProvider,
    AngularFireDatabase    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
