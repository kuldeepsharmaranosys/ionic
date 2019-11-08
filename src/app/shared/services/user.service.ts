import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { STORAGE } from '../../constants/storage';
import { reject } from 'q';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: any;
  isLoggedIn:boolean = false;
  constructor(private storage: Storage) { }

  setUser(user) {
    this.user = user;
    this.isLoggedIn = true;
  }
  login(user) {
    return new Promise(( resolve, reject) => {
      this.isLoggedIn = true;
      //localStorage.setItem(STORAGE.isLoggedIn, '1');
      this.storage.set(STORAGE.isLoggedIn, '1');
      this.storage.set(STORAGE.userData, user);
      this.user = user;
      resolve();
    });
  }
  logout() {
    return new Promise( ( resolve, reject) => {
      this.isLoggedIn = false;
      //localStorage.setItem(STORAGE.isLoggedIn, '0');
      this.storage.set(STORAGE.isLoggedIn, '0');
      this.user = {};
      resolve();
    });
  }
  initializeUser() {
    this.storage.get(STORAGE.isLoggedIn).then(isLoggedIn => {
      if (isLoggedIn === '1') {
        this.storage.get(STORAGE.userData).then(userData => {
          this.user = userData;
          this.isLoggedIn = true;
        });
      }
    });
  }
}
