import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
<<<<<<< HEAD
import { Facebook } from '@ionic-native/facebook';
=======
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
>>>>>>> d8f8c5c7c30646511a05ecda06a660917710cd7e
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {LoginPage} from '../pages/login/login';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AguaPage } from '../pages/agua/agua';
import {ReportePage} from '../pages/reporte/reporte';
var config = {
  apiKey: "AIzaSyC5yDN_DjhLHlsIxw6Mszh1YnbxhNXWR9M",
  authDomain: "reportes-552ff.firebaseapp.com",
  databaseURL: "https://reportes-552ff.firebaseio.com",
  projectId: "reportes-552ff",
  storageBucket: "reportes-552ff.appspot.com",
  messagingSenderId: "146952253239"
};
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    AguaPage,
    ReportePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config)
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    AguaPage,
    ReportePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
<<<<<<< HEAD
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook
=======
    Camera,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
>>>>>>> d8f8c5c7c30646511a05ecda06a660917710cd7e
  ]
})
export class AppModule {}
