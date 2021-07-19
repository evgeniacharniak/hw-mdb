import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AuthService } from '@mf-app/core/auth-service/auth.service';

import { LOGIN_PATH } from '@mf-app/core/login';
import { UPDATE_PASSWORD_PATH } from '@mf-app/core/update-password';

@Component({
  selector: 'mf-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoutComponent {

  public constructor(private _authService: AuthService) { }

  public logOutHandler(): void {
    this._authService.logOutToggle();
  }

  public getLoginLink(): string {
    return `../${LOGIN_PATH}`;
  }

  public getUpdatePasswordLink(): string {
    return `../${UPDATE_PASSWORD_PATH}`;
  }

  public isLogIn(): boolean {
    return this._authService.isLoggedIn;
  }
}
