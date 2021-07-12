import { AbstractControl } from "@angular/forms";
import { ValidatorFn } from "@ng-stack/forms";

export function PASSWORD_STRONG_VALIDATOR(regexp: RegExp): ValidatorFn {
  return (control: AbstractControl): { weakpassword: true } | null => {
    if (control.dirty && !regexp.test(control.value)) {
      return { weakpassword: true };
    }
    return null;
  }
}

export function PASSWORD_CONFIRM_VALIDATOR(): ValidatorFn {
  return (control: AbstractControl): { notMached: true } | null => {
    const passwordControl = control.get('newPassword');
    const confirmPasswordControl = control.get('confirmNewPassword');
    if (passwordControl?.pristine || confirmPasswordControl?.pristine) {
      return null;
    }
    return passwordControl?.value !== confirmPasswordControl?.value
      ? { notMached: true }
      : null;
  }
}
