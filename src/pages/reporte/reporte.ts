import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
//import { GoogleMaps,GoogleMap,GoogleMapsEvent,GoogleMapOptions,CameraPosition,MarkerOptions,Marker, Geocoder} from '@ionic-native/google-maps';
// import {
//   GoogleMaps,
//   GoogleMap,
//   GoogleMapsEvent,
//   LatLng,
//   CameraPosition,
//   MarkerOptions,
//   Geocoder, 
//   GeocoderRequest, 
//   GeocoderResult,
// } from '@ionic-native/google-maps';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderOriginal} from '@ionic-native/native-geocoder';
//import { Geocoder } from '@ionic-native/google-maps';
//import { GeocoderProvider } from '../../providers/geocoder/geocoder';
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
   private direccion:string;
  //  map: GoogleMap;
  // myPosition: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams,private camara: Camera,public alertCtrl: AlertController,private geolocation :Geolocation, private _GEOCODE: NativeGeocoder) {
    this.categoria = navParams.get('categoria');
     
  }

  ionViewDidLoad() {

   //this.getCurrentPosition();
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitud= resp.coords.latitude
      this.longitud= resp.coords.longitude
      console.log(this.latitud);
      console.log(this.longitud);
      this.reverseGeocode(this.latitud, this.longitud);
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
  reverseGeocode(lat : number, lng : number) : Promise<any>
{
   return new Promise((resolve, reject) =>
   {
      this._GEOCODE.reverseGeocode(lat, lng)
      .then((result : NativeGeocoderReverseResult) => 
      {
         let str : string   = `The reverseGeocode address is ${result.thoroughfare} in ${result.countryCode}`;
         resolve(str);
         this.direccion = str;
      })
      .catch((error: any) =>
      {
         reject(error);
      });
   });
}
  // getCurrentPosition(){
  //   this.geolocation.getCurrentPosition()
  //   .then(position => {
  //     this.myPosition = {
  //       latitude: position.coords.latitude,
  //       longitude: position.coords.longitude
  //     }
  //     this.loadMap();
  //   })
  //   .catch(error=>{
  //     console.log(error);
  //     //this.toast.show("No se ha podido obtener su ubicación", '5000', 'center')
  //     //.subscribe(toast => console.log(toast) );
  //   })
  // }

  // loadMap(){
  //   // create a new map by passing HTMLElement
  //   let element: HTMLElement = document.getElementById('map');

  //   this.map = this.googleMaps.create(element);

  //   // create CameraPosition
  //   let position: CameraPosition = {
  //     target: new LatLng(this.myPosition.latitude, this.myPosition.longitude),
  //     zoom: 12,
  //     tilt: 30
  //   };

  //   this.map.one(GoogleMapsEvent.MAP_READY).then(()=>{
  //     console.log('Map is ready!');

  //     // move the map's camera to position
  //     this.map.moveCamera(position);

  //     let markerOptions: MarkerOptions = {
  //       position: this.myPosition,
  //       title: "Hello"
  //     };

  //     this.addMarker(markerOptions);
  //   });
  // }
  // addMarker(options){
  //   let markerOptions: MarkerOptions = {
  //     position: new LatLng(options.position.latitude, options.position.longitude),
  //     title: options.title,
  //     icon: options.icon
  //   };
  //   this.map.addMarker(markerOptions)
  //   .then(marker =>{
  //     this.doGeocode(marker);
  //   })
  // }
  // doGeocode(marker){
  //   let request: GeocoderRequest = {
  //     position: new LatLng(this.myPosition.latitude, this.myPosition.longitude),
  //   };
  //   this.geocoder.geocode(request)
  //   .then((results: GeocoderResult) => {
  //     let address = [
  //       (results[0].thoroughfare || "") + " " + (results[0].subThoroughfare || ""),
  //       results[0].locality
  //     ].join(", ");
  //     console.log("data_: ", address);
  //     marker.setTitle(address);
  //     marker.showInfoWindow();
  //   });
  // }
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

