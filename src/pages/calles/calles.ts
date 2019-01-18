import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ReportePage} from '../../pages/reporte/reporte';
/**
 * Generated class for the CallesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calles',
  templateUrl: 'calles.html',
})
export class CallesPage {
  private categoria:string="Calles";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CallesPage');
  }
  RedirecReporte(){
    this.navCtrl.push(ReportePage,{categoria:this.categoria});

  }
}
