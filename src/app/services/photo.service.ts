import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { ToastController } from '@ionic/angular';
import { Storage } from '@capacitor/storage';
import { Filesystem, Directory} from '@capacitor/filesystem';
import { Photos } from '../models/photo.interface';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  photos: Photos[] = [];
  constructor(private toast: ToastController) { }

  /**
   * The function takes a photo, adds it to the photos array, and then displays it in the UI
   */
  async takePhoto(){
    try{
      console.log('takePhoto');
      const photoCaptured = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 75
      });

      this.photos.unshift({
        filepath: 'photo_',
        webviewPath: photoCaptured.webPath
    });
    this.presentToast();
    }catch(e){
      console.error(`Error takePhoto: ${e.message}`);
    }
  }

  getPhotos(){
    return this.photos;
  }

  async savePhoto(cameraPhoto: Photo){

  }

  async presentToast(){
    const toast = await this.toast.create({
      message: 'Saved photo.',
      duration: 2000,
      color: 'rgba(255, 255, 255, 0.3)',
      cssClass: 'toast-bg'
    });
    await toast.present();
  }
}
