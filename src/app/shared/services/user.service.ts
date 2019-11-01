import { Injectable } from '@angular/core';
import { STORAGE } from '../../constants/storage';
import { reject } from 'q';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: any;
  isLoggedIn:boolean = false;
  constructor() { }

  setUser(user) {
    this.user = user;
    this.isLoggedIn = true;
  }
  login(user) {
    return new Promise(( resolve, reject) => {
      this.isLoggedIn = true;
      localStorage.setItem(STORAGE.isLoggedIn, '1');
      this.user = user;
      resolve();
    });
  }
  logout() {
    return new Promise( ( resolve, reject) => {
      this.isLoggedIn = false;
      localStorage.setItem(STORAGE.isLoggedIn, '0');
      this.user = {};
      resolve();
    });
  }
  initializeUser() {
    if (localStorage.getItem(STORAGE.isIntroComplate) === '1') {
      this.user = localStorage.getItem(STORAGE.userData);
      this.isLoggedIn = true;
    }
  }
}
