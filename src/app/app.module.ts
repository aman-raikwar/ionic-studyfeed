import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

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

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestApiProvider } from '../providers/rest-api/rest-api';

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
    SearchPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
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
    LadderPage    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestApiProvider
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
