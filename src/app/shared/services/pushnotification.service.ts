import { Injectable } from '@angular/core';
import { FCM } from '@ionic-native/fcm/ngx';
import { Router } from '@angular/router';

import { SharedService } from './shared.service';
@Injectable({
  providedIn: 'root'
})
export class PushnotificationService {

  constructor(private fcm: FCM, private router: Router, private ss: SharedService) { }
  /**
   * @method configFCM
   * @description FCM push notification
   */
  public configFCM() {
    this.fcm.getToken().then(token => {
      console.log("fcm token " + token);
      if (token) {
        //this.user.api.devicetoekn =  token;
        // alert(token)
      }
    });

    this.fcm.onNotification().subscribe(data => {
      console.log("onNotification " + JSON.stringify(data));
      if (data.wasTapped) {
        setTimeout(() => {
          this.router.navigateByUrl(data.redirect_url);
        }, 2000);

        console.log("Received in background");
      } else {
        //this.router.navigateByUrl("/home");
        let message = "";
        if (this.ss.deviceType === 'android') {
          message = data.body;
        } else {
          message = data.body != undefined ? data.body : data.notification.body;
        }
        this.ss.showAlert(message, "Ok", () => {
          this.router.navigateByUrl(data.redirect_url);
        }, "Ignore");
        // this.user.api.populateAlert('', message, 'Ok', () => {

        // } );
        console.log("Received in foreground");
      }
    });

    this.fcm.onTokenRefresh().subscribe(token => {
      console.log("fcm token onTokenRefresh " + token);
      if (token) {
        //this.user.api.devicetoekn =  token;
      }
    });
  }
}
