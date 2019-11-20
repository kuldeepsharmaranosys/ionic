import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { TranslateService } from '@ngx-translate/core';
import { STORAGE } from '../../constants/storage';
import { CONFIG } from '../../constants/config';
import { reject } from 'q';
import { User } from '../../modals/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;
  isLoggedIn: boolean = false;
  constructor(private storage: Storage, private translate: TranslateService) { }

  setUser(user) {
    this.user = new User(user);
    this.storage.set(STORAGE.userData, this.user);
    this.isLoggedIn = true;
    this.storage.set(STORAGE.isLoggedIn, '1');
  }
  login(user) {
    return new Promise((resolve, reject) => {
      this.setUser(user);
      resolve();
    });
  }
  logout() {
    return new Promise((resolve, reject) => {
      this.isLoggedIn = false;
      this.storage.set(STORAGE.isLoggedIn, '0');
      delete this.user;
      this.storage.set(STORAGE.userData, this.user);
      resolve();
    });
  }
  initializeUser() {
    this.storage.get(STORAGE.isLoggedIn).then(isLoggedIn => {
      if (isLoggedIn === '1') {
        this.storage.get(STORAGE.userData).then(userData => {
          this.user = new User(userData);
          this.isLoggedIn = true;
        });
      }
    });
    this.storage.get(STORAGE.language).then((language) => {
      if (language !== null) {
        this.translate.setDefaultLang(language);
        this.translate.use(language);
      } else {
        this.translate.setDefaultLang(CONFIG.defaultLanguage);
        this.translate.use(CONFIG.defaultLanguage);
      }
    })
  }
}
