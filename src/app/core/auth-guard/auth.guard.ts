import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth-service/auth.service';
import { LOGIN_PATH } from '../login';

@Injectable()
export class AuthGuard implements CanActivate {

  public constructor(private _authService: AuthService, private _router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this._authService.isLoggedIn) {
      return true;
    }
    this._router.navigate([LOGIN_PATH]);
    return false;
  }

}
