import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
/**
 * Generated class for the ReportePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reporte',
  templateUrl: 'reporte.html',
})
export class ReportePage {
   private base64Image : string;
   private latitud:any;
   private longitud:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private camara: Camera,public alertCtrl: AlertController,private geolocation :Geolocation ) {
  }

  ionViewDidLoad() {
   
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitud= resp.coords.latitude
      this.longitud= resp.coords.longitude
      console.log(this.latitud);
      console.log(this.longitud);
     }).catch((error) => {
       console.log('Error getting location', error);
     });
     
     let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
     });
  }
  Camara(){
  const options: CameraOptions = {
    quality: 100,
    destinationType: this.camara.DestinationType.FILE_URI,
    encodingType: this.camara.EncodingType.JPEG,
    mediaType: this.camara.MediaType.PICTURE
  }
  this.camara.getPicture(options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64 (DATA_URL):
     this.base64Image = 'data:image/jpeg;base64,' + imageData;
   }, (err) => {
    // Handle error
   });
 }

 titulo(){
  let alert = this.alertCtrl.create();
  alert.setTitle('Titulo Reporte');

  alert.addInput({
    type: 'radio',
    label: 'Fuga en Calle',
    value: 'blue',
    checked: true
  });

  alert.addButton('Cancel');
  alert.addButton({
    text: 'OK',
    handler: data => {
      
    }
  });
  alert.present();
}
 }

