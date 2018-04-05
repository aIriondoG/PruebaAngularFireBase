import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
//Import pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
//Import the AngularFirebase2 Module
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
//AF2 Settings
export const firebaseConfig = {
  apiKey: "AIzaSyCBhuJZioyBkxZfU1vrgDTiVsy6DJ_qoFk",
  authDomain: "pruebajosh-f96d7.firebaseapp.com",
  databaseURL: "https://pruebajosh-f96d7.firebaseio.com",
  projectId: "pruebajosh-f96d7",
  storageBucket: "",
  messagingSenderId: "75169238201"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
