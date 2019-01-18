import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ReportePage} from '../../pages/reporte/reporte';
/**
 * Generated class for the ParquesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parques',
  templateUrl: 'parques.html',
})
export class ParquesPage {
  private categoria:string="Parques";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParquesPage');
  }
  RedirecReporte(){
    this.navCtrl.push(ReportePage,{categoria:this.categoria});

  }
}
