import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
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
import {AlumbradoPage} from '../pages/alumbrado/alumbrado';
import {CallesPage} from '../pages/calles/calles';
import {ParquesPage} from '../pages/parques/parques';
import { GoogleMaps } from '@ionic-native/google-maps';
import { GeocoderProvider} from '../providers/geocoder/geocoder';
import { NativeGeocoderOriginal } from '@ionic-native/native-geocoder';
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
    ReportePage,
    AlumbradoPage,
    CallesPage,
    ParquesPage
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
    ReportePage,
    AlumbradoPage,
    CallesPage,
    ParquesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    Camera,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NativeGeocoderOriginal,
    GoogleMaps, 
    GeocoderProvider
    
  ]
})
export class AppModule {}
