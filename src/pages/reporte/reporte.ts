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
   MiFoto:any;
   private latitud:any;
   private longitud:any;
   private categoria:string;
   private Titulo:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,private camara: Camera,public alertCtrl: AlertController,private geolocation :Geolocation ) {
    this.categoria = navParams.get('categoria');
     
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
    destinationType: this.camara.DestinationType.DATA_URL,
    encodingType: this.camara.EncodingType.JPEG,
    mediaType: this.camara.MediaType.PICTURE
  }
  this.camara.getPicture(options).then((imageData) => {
    // imageData is either a base64 encoded string or a file URI
    // If it's base64 (DATA_URL):
     this.MiFoto = 'data:image/jpeg;base64,' + imageData;
   }, (err) => {
    // Handle error
   });
 }

 titulo(){
   if(this.categoria=='Agua'){
      let alert = this.alertCtrl.create();
  alert.setTitle('Titulo Reporte');

  alert.addInput({
    type: 'radio',
    label: 'Fuga en Calle',
    value: 'Fuga en Calle',
   
  });
  alert.addInput({
    type: 'radio',
    label: 'Fuga en Domicilio',
    value: 'Fuga en Domicilio',
   
  });
  alert.addInput({
    type: 'radio',
    label: 'Fuga de Drenaje',
    value: 'Fuga de Drenaje',
   
  });
  alert.addInput({
    type: 'radio',
    label: 'Sin servicio',
    value: 'Sin servicio',
   
  });

  alert.addButton('Cancel');
  alert.addButton({
    text: 'OK',
    handler: data => {
      this.Titulo= data;
    }
  });
  alert.present();
   }
   if(this.categoria=='Alumbrado'){
    let alert = this.alertCtrl.create();
alert.setTitle('Titulo Reporte');

alert.addInput({
  type: 'radio',
  label: 'Calle sin luz',
  value: 'Calle sin luz',
 
});
alert.addInput({
  type: 'radio',
  label: 'Lampara sin prender',
  value: 'Lampara sin prender',
 
});


alert.addButton('Cancel');
alert.addButton({
  text: 'OK',
  handler: data => {
    this.Titulo= data;
  }
});
alert.present();
 }
}
 }

