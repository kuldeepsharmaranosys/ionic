import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AlertController, LoadingController, Platform, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

import { Market } from '@ionic-native/market/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AppRate } from '@ionic-native/app-rate/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public environment = environment;
  public loading;
  deviceType = 'android';
  public validation_msg = {};

  public alert;
  constructor(private http: HttpClient, private loadingController: LoadingController, public alertCtrl: AlertController, public toastController: ToastController, private market: Market, private socialSharing: SocialSharing, private appRate: AppRate, private router: Router,  private platform: Platform, private iab: InAppBrowser) {
    this.deviceType = this.platform.is('android') ? 'android' : 'ios';
    this.validation_msg = {
      'required': ' is required.',
      'pattern': ' not having valid pattern.',
      'minlength': ' not having minlength',
      'maxlength': ' not having maxlength'
    };
  }
/**
 * @method showLoader
 * @param messageParam message string
 */
  public showLoader(messageParam = '') {
    this.loadingController.create({
       message: messageParam,
       translucent: true,
       cssClass: 'custom-class custom-loading'
     }).then((loading) => {
       this.loading = loading;
       this.loading.present();
     });
   }
/**
 * @method hideLoader
 */
   public hideLoader() {
     if (this.loading !== '' && this.loading !== undefined) {
       this.loading.dismiss();
       this.loading = '';
     }
   }
/**
 * @method showAlert
 * @description Show General alert
 */
public showAlert(messagealert: string, buttontxt = 'OK', handlerFun = () => {}, cancelButton: any = "", cancelHandler = () => {}, title = environment.name) {
  const buttonsArr = [{
    text: buttontxt,
    handler: handlerFun,
    cssClass: 'button-ios-orange1'
  }];

  if (cancelButton !== "") {
    buttonsArr.push({
      text: cancelButton,
      handler: cancelHandler,
      cssClass: 'button-ios-orange1'
    });
  }
  messagealert = messagealert.replace(new RegExp('_', 'g'), ' ');
  messagealert = messagealert.charAt(0).toUpperCase() + messagealert.substr(1);
  this.alertCtrl.create({
    header: title,
    message: messagealert,
    buttons: buttonsArr,
    backdropDismiss: false
  }).then((alert) => {
    alert.present();
  });
}
/**
 * @method presentToast
 * @param msg message
 * @param durationShow time
 */
async presentToast(msg, durationShow = 2000) {
  const toast = await this.toastController.create({
    message: msg,
    duration: durationShow,
    position: "bottom"
  });
  toast.present();
}
/**
 * @method updateVersion
 */
/**
 * @method hitApi
 * @description Get data form server
 * @param url url of api after base URL
 * @param method GET/POST
 * @param data []
 * @param loaderShow Default : 'true' | show loading
 * @param headerAdd  Default : false | add header in aip
 * @param httpUrl Default : environment.APIBASEURL | if need to hit app to other server
 */
public hitApi(url: string, method: string = 'GET', data: any = {}, loaderShow = 'true', headerAdd = 'false', httpUrl = environment.APIBASEURL) {
  if (method === 'POST') {
    return  this.http.post(environment.APIBASEURL + url, data, {params: {loader: loaderShow, header: headerAdd}}).pipe(
      map(results => results)
    );
  } else if (method === 'GET') {
    return this.http.get(environment.APIBASEURL + url + "?" + this.toQueryString(data), {params: {loader: loaderShow, header: headerAdd}}).pipe(
      map(results => results)
    );
  }
}
/**
 * @method toQueryString
 * @description convert object to query string
 * @param obj object
 */
  public toQueryString(obj) {
    let parts = [];
    for (let i in obj) {
      if (obj.hasOwnProperty(i)) {
        parts.push(encodeURIComponent(i) + "=" + encodeURIComponent(obj[i]));
      }
    }
    return parts.join("&");
  }
  
  public errorHandal(error, event = null) {
    if (error.status === 404) {
      this.showAlert((error.replyMsg ? error.replyMsg : 'Server Error'), 'OK');
    } else if (error.status === 500 || error.status === 401) {
        error = error.json();
        this.showAlert((error.reply ? error.reply : error.replyMsg ? error.replyMsg : 'Server Error'), 'OK');
    } else if (error.status === 0) {
        //this.showAlert('Network not found, Please check your connection.', 'OK');
    } else if (error.error.data.status === 400) {
      event.target.complete();
      event.target.disabled = true;
    }
   }

   public validation(form, msg: any = '') {
    if (form.valid) {
      return true;
    }
    outer: for (const field in form.controls) {
      const control = form.get(field);
      if (control && (control.dirty || !control.valid)) {
        if (msg && msg[field]) {
          const messages = msg[field];
          for (const key in control.errors) {
            if (messages[key]) {
              this.showAlert(messages[key]);
            } else {
              if (this.validation_msg[key]) {
                this.showAlert(field + this.validation_msg[key]);
              } else {
                this.showAlert('Field have error:- ' + key);
              }
            }
            break outer;
          }
        } else {
          for (const key in control.errors) {
            const messages = this.validation_msg[key];
            if (messages) {
              this.showAlert(field + messages);
            } else {
              this.showAlert('Field have error:- ' + key);
            }
            break outer;
          }
        }
      }
    }
  }

updateVersion() {
  this.showAlert('New app version is available. Please update your app.', 'Update', () => {
    if (this.deviceType === 'i') {
      this.market.open(''); // add app store url
    } else {
      this.market.open(environment.packageId);
    }
  });
 }
/**
 * @method share
 * @param message share message
 * @param subject share subject
 * @param file    share image
 * @param url     share url
 */
 public share(message?: string, subject?: string, file?: string | string[], url: string = environment.playStoreURL) {
    this.socialSharing.share(message, subject, null, url).then(() => {
    }).catch((error) => {
    });
 }
/**
 * @method rateApp
 * @description use to rate app
 */
 rateApp() {
  this.appRate.preferences = {
    storeAppURL: {
      ios: '12345678',
      android: environment.ratePlayStoreURL
    },
    usesUntilPrompt: 2,
    customLocale: {
      title: 'Rate Us... Pretty Please?',
      message: 'We value your feedback! Please take a moment to tell us how we\'re doing',
      cancelButtonLabel: 'Pass',
      rateButtonLabel: 'Rate it!',
      laterButtonLabel: 'Ask Later',
      appRatePromptTitle: 'Do you like this app?',
      yesButtonLabel: 'Yes',
      noButtonLabel: 'No'
    }
  };
  this.appRate.promptForRating(true);
}

/**
 * @method iabOpen
 */
  iabOpen(url: string) {
    this.iab.create(url);
  }
}
