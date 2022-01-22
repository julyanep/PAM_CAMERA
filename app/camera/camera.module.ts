import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CameraPageRoutingModule } from './camera-routing.module';

import { CameraPage } from './camera.page';

import { Camera } from '@ionic-native/camera/ngx';

import { MediaCapture } from '@ionic-native/media-capture/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CameraPageRoutingModule
  ],
  providers: [Camera, MediaCapture],
  declarations: [CameraPage]
})
export class CameraPageModule {}
