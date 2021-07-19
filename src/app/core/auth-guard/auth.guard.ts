import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';

import { AuthService } from '@mf-app/core/auth-service/auth.service';

import { LOGIN_PATH } from '@mf-app/core/login';


@Injectable()
export class AuthGuard implements CanActivate {

  public constructor(private _authService: AuthService, private _router: Router) { }

  public canActivate(
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this._authService.isLoggedIn) {
      return true;
    }
    this._router.navigate([LOGIN_PATH]);
    return false;
  }

}
