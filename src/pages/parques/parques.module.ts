import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParquesPage } from './parques';

@NgModule({
  declarations: [
    ParquesPage,
  ],
  imports: [
    IonicPageModule.forChild(ParquesPage),
  ],
})
export class ParquesPageModule {}
