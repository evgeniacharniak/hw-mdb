import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Validators } from '@angular/forms';

import { take } from 'rxjs/operators';

import { CredentialsService } from '@mf-app/core/update-password/credentials-service/credentials.service';

import { FormBuilder, FormControl, FormGroup } from '@ng-stack/forms';
import { PropType } from '@mf-app/shared/models/prop-type';
import { PASSWORD_CONFIRM_VALIDATOR } from '@mf-app/shared/validators/password-confirm-validator';
import { PASSWORD_STRONG_VALIDATOR } from '@mf-app/shared/validators/password-strong-validator';
import { IUpdatePassword } from '@mf-app/core/update-password/models/update-password-model';
import { UpdatePasswordValidatorsModel } from '@mf-app/core/update-password/models/update-password-validators-model';
import { ONE } from '@mf-app/shared/models/constants';

const PASSWORD_MAX_LENGTH = 8;

@Component({
  selector: 'mf-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpdatePasswordComponent {


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

  public get isOldPassRequiredError(): boolean {
    return this.oldPassControl.errors ? this.oldPassControl.errors?.required : false;
  }

  public get isNewPassRequiredError(): boolean {
    return this.newPassControl.errors ? this.newPassControl.errors?.required : false;
  }

  public get isConfirmPassRequiredError(): boolean {
    return this.confirmNewPassControl.errors ? this.confirmNewPassControl.errors?.required : false;
  }

  public get isNewPasswordWeakError(): boolean {
    return this.newPassControl.errors ? (this.newPassControl.errors?.isWeakPassword || this.newPassControl.errors?.minlength) : false;
  }

  public get isPasswordNotMatchError(): boolean {
    return this._form.errors ? this._form.errors?.isNotMached : false;
  }

  public get isOldPasswordIncorrectError(): boolean {
    return this._form.errors ? this._form.errors?.isOldPasswordIncorrect : false;
  }

  public constructor(
    private _reactiveFormsModule: FormBuilder,
    private _credentialsService: CredentialsService,
    private _changeDetectorRef: ChangeDetectorRef,
  ) {
    this._form = this._reactiveFormsModule.group<IUpdatePassword, UpdatePasswordValidatorsModel>(
      {
        oldPassword: ['', [Validators.required]],
        newPassword: ['', [
          Validators.required,
          Validators.minLength(PASSWORD_MAX_LENGTH),
          PASSWORD_STRONG_VALIDATOR(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).*$/),
        ]],
        confirmNewPassword: ['', [Validators.required]],
      }, {
        validators: [
          PASSWORD_CONFIRM_VALIDATOR(),
        ],
      },
    );
  }

  public updatePasswordHandler(): void {
    if (this._form.valid) {
      this._credentialsService.updatePassword(this.oldPassControl.value, this.newPassControl.value)
        .pipe(take(ONE))
        .subscribe(value => {
          if (value) {
            this._form.setErrors(null);
          } else {
            this._form.setErrors({ isOldPasswordIncorrect: true });
          }
          this._changeDetectorRef.markForCheck();
        });
    }
  }

}
