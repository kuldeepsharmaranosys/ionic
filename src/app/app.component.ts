import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { PushnotificationService } from './shared/services/pushnotification.service';
import { UserService } from './shared/services/user.service';
import { JokeCategoryService } from './services/joke-category.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public router: Router,
    private ps: PushnotificationService,
    public us: UserService,
    public jcs: JokeCategoryService
  ) {
    this.us.initializeUser();
    this.initializeApp();
    this.jcs.get();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // this.statusBar.styleDefault();
      //this.splashScreen.hide();
      //this.ps.configFCM();
    });
  }
  logout() {
    this.us.logout().then((result) => {
      this.router.navigateByUrl('/login');
    });
  }
}
