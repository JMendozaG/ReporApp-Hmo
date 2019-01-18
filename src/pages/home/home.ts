import { Component,ViewChild } from '@angular/core';
import { NavController,Slides } from 'ionic-angular';
import {AguaPage} from '../../pages/agua/agua';
import {AlumbradoPage} from '../../pages/alumbrado/alumbrado';
import {CallesPage} from '../../pages/calles/calles';
import {ParquesPage} from '../../pages/parques/parques';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController) {

  }
  slideChanged(){
    let currentIndex = this.slides.getActiveIndex();
    if(currentIndex==3){
      this.slides.autoplay;
    }
  }
  Agua(){
   this.navCtrl.push(AguaPage);
  }
  Alumbrado(){
    this.navCtrl.push(AlumbradoPage);
  }
  Calles(){
    this.navCtrl.push(CallesPage);
  }
  Parques(){
    this.navCtrl.push(ParquesPage);
  }
}
