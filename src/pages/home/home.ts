import { Component,ViewChild } from '@angular/core';
import { NavController,Slides } from 'ionic-angular';
import {AguaPage} from '../../pages/agua/agua';
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

  }
  Calles(){

  }
  Parques(){

  }
}
