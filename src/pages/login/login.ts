import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireAuth} from'angularfire2/auth'
import firebase from'firebase';
import {HomePage} from '../../pages/home/home';
import { Facebook } from '@ionic-native/facebook';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: any = {};
  showUser: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,private fire :AngularFireAuth, public facebook: Facebook) {
  }

  ionViewDidLoad() {
    
  }
  loginFacebook(){
    this.facebook.login(['public_profile', 'email'])
    .then(rta => {
      console.log(rta.status);
      if(rta.status == 'connected'){
        this.getInfo();
        this.navCtrl.setRoot(HomePage);
      };
    })
    .catch(error =>{
      console.error( error );
    });
  }

  getInfo(){
    this.facebook.api('/me?fields=id,name,email,first_name,picture,last_name,gender',['public_profile','email'])
    .then(data=>{
      console.log(data);
      this.showUser = true; 
      this.user = data;
    })
    .catch(error =>{
      console.error( error );
    });
  }



  // async loginWithFacebook(): Promise<any> {
  //   try {
  //     const response = await this.facebook.login(['email']);
  //     const facebookCredential = firebase.auth.FacebookAuthProvider
  //       .credential(response.authResponse.accessToken);
  //     firebase.auth().signInWithCredential(facebookCredential)
  //       .then(success => {
  //         this.navCtrl.setRoot(HomePage);
  //         //alert("Firebase success: " + JSON.stringify(success));
  //       });
  //   }
  //   catch (error) {
  //     console.log(error);
  //   }
  // }

  // LoginFace(){
  // this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(
  //   res=>{
  //     if(res){
  //      this.navCtrl.setRoot(HomePage);
  //     }
  //   }
  // )
  // this.navCtrl.setRoot(HomePage);
  // }
}
