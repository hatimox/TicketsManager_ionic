import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SimpleSPage } from './simple-s';

@NgModule({
  declarations: [
    SimpleSPage,
  ],
  imports: [
    IonicPageModule.forChild(SimpleSPage),
  ],
})
export class SimpleSPageModule {}
