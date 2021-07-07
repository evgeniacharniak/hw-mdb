import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLoggedIn: boolean = false;
  public get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  public logInToggle(): void {
    this._isLoggedIn = true;
  }

  public logOutToggle(): void {
    this._isLoggedIn = false;
  }

}
