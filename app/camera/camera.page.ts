import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { MediaCapture, MediaFile, CaptureVideoOptions } from '@ionic-native/media-capture/ngx';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  img: any;

  constructor(
    private camera: Camera,
    private mediaCapture: MediaCapture
  ) { }

  ngOnInit() {
  }

  tirarFoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true,
      // allowEdit: false
    };

    this.camera
      .getPicture(options)
      .then((imageData) => {
        alert(imageData);
        const base64Image = 'data:image/jpeg;base64, ' + imageData;
        this.img = base64Image;
      })
      .catch((err) => {
        // Handle error
        alert(JSON.stringify(err));
    });
  }

  filmar() {

    const options: CaptureVideoOptions = {
      limit: 1,
      duration: 10
    };

    this.mediaCapture.captureVideo(options)
    .then((retorno: MediaFile[])=>{
      console.log(retorno);
    })
    .catch((err)=>{
      alert(JSON.stringify(err));
    });
  }
}
