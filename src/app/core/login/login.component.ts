import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MDB_DASHBOARD_PATH } from 'src/app/features/mdb-dashboard';
import { AuthService } from '../auth-service/auth.service';

@Component({
  selector: 'mf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

  public constructor(private _authService: AuthService) {  }

  public logInHandler(): void {
    this._authService.logInToggle();
  }

  public getMdbDashboardLink(): string {
    return `../${MDB_DASHBOARD_PATH}`;
  }
}
