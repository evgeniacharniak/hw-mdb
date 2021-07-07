import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-service/auth.service';
import { LOGIN_PATH } from '../login';

@Component({
  selector: 'mf-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {

  public constructor(private _authService: AuthService) {  }

  public logOutHandler(): void {
    this._authService.logOutToggle();
  }

  public getLoginLink(): string {
    return `../${LOGIN_PATH}`;
  }

  public isLogIn(): boolean {
    return this._authService.isLoggedIn;
  }
}
