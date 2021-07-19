import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';

import { take } from 'rxjs/operators';

import { AuthService } from '@mf-app/core/auth-service/auth.service';

import { FormBuilder, FormControl, FormGroup } from '@ng-stack/forms';
import { ICredentials } from '@mf-app/shared/models/credentials';
import { PropType } from '@mf-app/shared/models/prop-type';
import { MDB_DASHBOARD_PATH } from '@mf-app/features/mdb-dashboard';
import { LoginValidatorsModel } from '@mf-app/core/login/models/login-validator-model';
import { ONE } from '@mf-app/shared/models/constants';


@Component({
  selector: 'mf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {

  private _form: FormGroup<ICredentials, LoginValidatorsModel>;
  public get form(): FormGroup<ICredentials, LoginValidatorsModel> {
    return this._form;
  }

  public get loginControl(): FormControl<PropType<ICredentials, 'login'>> {
    return this._form.get('login') as unknown as FormControl<PropType<ICredentials, 'login'>>;
  }

  public get passwordControl(): FormControl<PropType<ICredentials, 'password'>> {
    return this._form.get('password') as unknown as FormControl<PropType<ICredentials, 'password'>>;
  }

  public get isLoginRequiredError(): boolean {
    return this.loginControl.errors ? this.loginControl.errors?.required : false;
  }

  public get isPasswordRequiredError(): boolean {
    return this.passwordControl.errors ? this.passwordControl.errors?.required : false;
  }

  public get isLoginFailedError(): boolean {
    return this._form.errors ? this._form.errors?.isLoginFailed : false;
  }

  public constructor(
    private _authService: AuthService,
    private _reactiveFormsModule: FormBuilder,
    private _router: Router,
  ) {
    this._form = this._reactiveFormsModule.group<ICredentials, LoginValidatorsModel>(
      {
        id: 0,
        login: ['', Validators.required],
        password: ['', Validators.required],
      },
    );
  }

  public logInHandler(): void {
    if (this._form.valid) {
      this._authService.logInToggle(this._form.value).pipe(take(ONE))
        .subscribe(value => {
          if (value) {
            this._router.navigate([MDB_DASHBOARD_PATH]);
            this._form.setErrors(null);
          } else {
            this._form.setErrors({ isLoginFailed: true });
          }
        });
    }
  }

  public getMdbDashboardLink(): string {
    return `../${MDB_DASHBOARD_PATH}`;
  }

}
