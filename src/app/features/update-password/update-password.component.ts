import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, ValidatorsModel } from '@ng-stack/forms';
import { take } from 'rxjs/operators';
import { PropType } from 'src/app/shared/models/prop-type';
import { PASSWORD_CONFIRM_VALIDATOR, PASSWORD_STRONG_VALIDATOR } from 'src/app/shared/validators/validators';
import { CredentialsService } from './credentials-service/credentials.service';
import { IUpdatePassword } from './models/update-password-model';
import { UpdatePasswordValidatorsModel } from './models/update-password-validators-model';

@Component({
  selector: 'mf-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent  {


  private _form: FormGroup<IUpdatePassword, UpdatePasswordValidatorsModel>;
  public get form(): FormGroup<IUpdatePassword, UpdatePasswordValidatorsModel> {
    return this._form;
  }

  public get oldPassControl(): FormControl<PropType<IUpdatePassword, 'oldPassword'>> {
    return this._form.get('oldPassword') as unknown as FormControl<PropType<IUpdatePassword, 'oldPassword'>>;
  }

  public get newPassControl(): FormControl<PropType<IUpdatePassword, 'newPassword'>, UpdatePasswordValidatorsModel> {
    return this._form.get('newPassword') as unknown as FormControl<PropType<IUpdatePassword, 'newPassword'>, UpdatePasswordValidatorsModel>;
  }

  public get confirmNewPassControl(): FormControl<PropType<IUpdatePassword, 'confirmNewPassword'>> {
    return this._form.get('confirmNewPassword') as unknown as FormControl<PropType<IUpdatePassword, 'confirmNewPassword'>>;
  }

  private _updatePassStatusMessage: string;
  public get updatePassStatusMessage(): string {
    return this._updatePassStatusMessage;
  }

  public get isOldPassRequiredError(): boolean {
    return this.oldPassControl.errors ? this.oldPassControl.errors!['required'] : false;
  }

  public get isNewPassRequiredError(): boolean {
    return this.newPassControl.errors ? this.newPassControl.errors!['required'] : false;
  }

  public get isConfirmPassRequiredError(): boolean {
    return this.confirmNewPassControl.errors ? this.confirmNewPassControl.errors!['required'] : false;
  }

  public get isNewPasswordWeakError(): boolean {
    debugger
    return this.newPassControl.errors ? (this.newPassControl.errors!['weakpassword'] || this.newPassControl.errors!['minlength']) : false;
  }

  public get isPasswordNotMatchError(): boolean {
    return this._form.errors ? this._form.errors!['notMached'] : false;
  }



  public constructor(
    private _reactiveFormsModule: FormBuilder,
    private _credentialsService: CredentialsService,
    private _changeDetectorRef: ChangeDetectorRef
    ) {
      this._form = this._reactiveFormsModule.group<IUpdatePassword, UpdatePasswordValidatorsModel>(
        {
          oldPassword: ['', [Validators.required]],
          newPassword: ['', [Validators.required, Validators.minLength(8), PASSWORD_STRONG_VALIDATOR(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).*$/)]],
          confirmNewPassword: ['', [Validators.required]],
        },{
          validators: [
            PASSWORD_CONFIRM_VALIDATOR(),
          ]
        }
      );
      this._updatePassStatusMessage='';
    }

    public updatePasswordHandler() {
      if(this._form.valid) {
        this._credentialsService.updatePassword(this.oldPassControl.value, this.newPassControl.value).
        pipe(take(1)).subscribe(value => {
          if(value) {
            this._updatePassStatusMessage = 'Password was updated!';
          } else {
          this._updatePassStatusMessage = 'Old Password is incorrect!';
          }
          this._changeDetectorRef.markForCheck();
        });
      } else {
        this.setErrorMessage();
      }
    }

    public setErrorMessage(): void {
      if (this.isOldPassRequiredError || this.isNewPassRequiredError || this.isConfirmPassRequiredError) {
        this._updatePassStatusMessage = 'Please enter old password, new password and confirm it';
        return;
      }
      this._updatePassStatusMessage = this.isNewPasswordWeakError ? 'Password should contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character'
      : this.isPasswordNotMatchError ? 'Confirm Password doesn`t match' : '';
    }

}
