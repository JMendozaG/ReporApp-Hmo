import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ReportePage} from '../../pages/reporte/reporte';
/**
 * Generated class for the AlumbradoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alumbrado',
  templateUrl: 'alumbrado.html',
})
export class AlumbradoPage {
  private categoria:string="Alumbrado";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlumbradoPage');
  }
  RedirecReporte(){
    this.navCtrl.push(ReportePage,{categoria:this.categoria});

  }
}
