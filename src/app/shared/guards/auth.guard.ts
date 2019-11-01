import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { STORAGE } from '../../constants/storage';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
  constructor(public router: Router) {}
  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    let isComplete = true;
    console.log("STORAGE.isIntroComplate",localStorage.getItem(STORAGE.isIntroComplate));
    if (localStorage.getItem(STORAGE.isIntroComplate) == null) {
      this.router.navigateByUrl('/intro');
      isComplete = false;
     } else if (localStorage.getItem(STORAGE.isLoggedIn) == null || localStorage.getItem(STORAGE.isLoggedIn) === '0') {
      this.router.navigateByUrl('/login');
      isComplete = false;
     }
    return isComplete;
  }
}
