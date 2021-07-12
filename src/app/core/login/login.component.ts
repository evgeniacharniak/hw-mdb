import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@ng-stack/forms';
import { filter, take } from 'rxjs/operators';
import { MDB_DASHBOARD_PATH } from 'src/app/features/mdb-dashboard';
import { PropType } from 'src/app/shared/models/prop-type';
import { ICredentials } from 'src/app/shared/models/credentials';
import { AuthService } from '../auth-service/auth.service';
import { LoginValidatorsModel } from './models/login-validator-model';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';

@Component({
  selector: 'mf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {

  private _form: FormGroup<ICredentials>;
  public get form(): FormGroup<ICredentials> {
    return this._form;
  }

  private _loginError: string | null;
  public get loginError(): string | null {
    return this._loginError;
  }

  public get loginControl(): FormControl<PropType<ICredentials, 'login'>, LoginValidatorsModel> {
    return this._form.get('login') as unknown as FormControl<PropType<ICredentials, 'login'>, LoginValidatorsModel>;
  }

  public get passwordControl(): FormControl<PropType<ICredentials, 'password'>> {
    return this._form.get('password') as unknown as FormControl<PropType<ICredentials, 'password'>>;
  }

  public get isLoginRequiredError(): boolean {
    return this.loginControl.errors ? this.loginControl.errors!['required'] : false;
  }

  public constructor(
    private _authService: AuthService,
    private _reactiveFormsModule: FormBuilder,
    private _router: Router,
  ) {
    this._form = this._reactiveFormsModule.group<ICredentials>(
      {
        id: 0,
        login: ['', Validators.required],
        password: ['', Validators.required],
      }
    );
    this._loginError = null;
  }

  public logInHandler(): void {
    if (this._form.valid) {
      this._authService.logInToggle(this._form.value).pipe(take(1)).subscribe(value => {
        if (value) {
          this._router.navigate([MDB_DASHBOARD_PATH]);
          this._loginError = null;
        }
      }
      );
      this._loginError = 'Login or password is incorrect';
    } else {
      this.setErrorMessage();
    }
  }

  public getMdbDashboardLink(): string {
    return `../${MDB_DASHBOARD_PATH}`;
  }

  private setErrorMessage() {
    const loginControlError = (!!this.loginControl.errors && this.loginControl.errors['required']) ? true : false;
    const passwordControlError = (!!this.passwordControl.errors && this.passwordControl.errors['required']) ? true : false;
    this._loginError = loginControlError && passwordControlError ?
      'Please, Enter Login and Password' : loginControlError ? 'Please, Enter Login' : 'Please, Enter Password';

  }

}
