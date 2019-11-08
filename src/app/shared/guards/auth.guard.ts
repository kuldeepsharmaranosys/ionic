import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { Storage } from '@ionic/storage';
import { STORAGE } from '../../constants/storage';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
  constructor(public router: Router, private storage: Storage) {}
  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    return await this.storage.get(STORAGE.isIntroComplate).then(async (isIntroComplate) => {
      if (isIntroComplate == null) {
        this.router.navigateByUrl('/intro');
        return false;
       } else {
        return await this.storage.get(STORAGE.isLoggedIn).then((isLoggedIn) => {
            if (isLoggedIn == null || isLoggedIn === '0') {
              this.router.navigateByUrl('/login');
              return false;
            } else {
              return true;
            }
        });
       }
    });
  }
}
