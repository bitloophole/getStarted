import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const currentUser: any = sessionStorage.getItem('currentUser');
      if (currentUser) {
        const userInfo = JSON.parse(currentUser);
        // if (route.data && (route.data !== userInfo.userRole)) {
        //   this.router.navigate(['/']);
        //   return false;
        // }
        return true;
      }
      this.router.navigate(['/login']);
      sessionStorage.clear();
      return false;
  }
  
}
