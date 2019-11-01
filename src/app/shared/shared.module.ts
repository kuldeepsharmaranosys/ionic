import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Market } from '@ionic-native/market/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AppRate } from '@ionic-native/app-rate/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Camera } from '@ionic-native/camera/ngx';

import { ParallaxHeaderDirective } from './directives/parallax-header.directive';

import { ItemlistComponent } from './components/itemlist/itemlist.component';

import { ApiInterceptorService } from './interceptors/api-interceptor.service';

@NgModule({
  declarations: [
    ItemlistComponent,
    ParallaxHeaderDirective
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Market,
    SocialSharing,
    AppRate,
    FCM,
    InAppBrowser,
    Camera,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptorService,
      multi: true
    }
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ItemlistComponent,
    ParallaxHeaderDirective
  ]
})
export class SharedModule {}
// ionic cordova plugin add cordova-plugin-market && npm install @ionic-native/market && ionic cordova plugin add cordova-plugin-x-socialsharing && npm install @ionic-native/social-sharing && ionic cordova plugin add cordova-plugin-apprate &&  npm install @ionic-native/app-rate && ionic cordova plugin add cordova-plugin-fcm-with-dependecy-updated && npm install @ionic-native/fcm && ionic cordova plugin add cordova-plugin-inappbrowser && npm install @ionic-native/in-app-browser && ionic cordova plugin add cordova-plugin-camera && npm install @ionic-native/camera
