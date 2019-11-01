import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActionSheetController } from '@ionic/angular';
import { SharedService } from '../services/shared.service';
@Injectable({
  providedIn: 'root'
})
export class CameraService {

  constructor(private camera: Camera, private ss: SharedService, public actionSheetController: ActionSheetController) { }
/**
 * @method getPicture
 * @description get picture
 * @param type camera/gallery
 * @param destType file
 */
    public getPicture(type: string = 'camera', destType: string = 'file'): Promise<any> {
      this.ss.showLoader();
      return new Promise((resolve, reject) => {
          if (type === 'camera') {
              this.camera.getPicture({
                  // allowEdit: true, // allow edit if required
                  destinationType: destType === 'file' ? this.camera.DestinationType.FILE_URI : this.camera.DestinationType.DATA_URL,
                  sourceType: this.camera.PictureSourceType.CAMERA,
                 targetWidth: 500,
                  targetHeight: 500,
                  quality: 100,
                  correctOrientation: true
              }).then((imageData) => {
                  this.ss.hideLoader();
                  resolve(imageData);
              }, (err) => {
                  this.ss.hideLoader();
                  reject(err);
              });
          } else {
              this.camera.getPicture({
                  // allowEdit: true, // allow edit if required
                  destinationType: destType === 'file' ? this.camera.DestinationType.FILE_URI : this.camera.DestinationType.DATA_URL,
                  sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                 targetWidth: 500,
                  targetHeight: 500,
                  quality: 100,
                  correctOrientation: true
              }).then((imageData) => {
                  this.ss.hideLoader();
                  resolve(imageData);
              }, (err) => {
                  console.log('In error');
                  this.ss.hideLoader();
                  reject(err);
              });
          }
      });
  }
/**
 * @method selectPhoto
 * @description Select camera, gallery, cancle
 */
  async selectPhoto(): Promise<any> {
    return new Promise(async (resolve, reject) => {
    const actionSheet = await this.actionSheetController.create({
        header: 'Select Option',
        buttons: [{
          text: 'Camera',
          icon: 'camera',
          handler: () => {
            this.getPicture('camera').then(image =>  resolve(image));
          }
        }, {
          text: 'Gallery',
          icon: 'image',
          handler: () => {
            this.getPicture('gallery').then(image => resolve(image));
          }
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'destructive',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
      });
    await actionSheet.present();
    });
  }
}
