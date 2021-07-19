import { AbstractControl } from '@angular/forms';

import { ValidatorFn } from '@ng-stack/forms';


export const PASSWORD_CONFIRM_VALIDATOR = (): ValidatorFn => (control: AbstractControl): { isNotMached: true } | null => {
  const passwordControl = control.get('newPassword');
  const confirmPasswordControl = control.get('confirmNewPassword');
  if (passwordControl?.pristine || confirmPasswordControl?.pristine) {
    return null;
  }
  return passwordControl?.value !== confirmPasswordControl?.value
    ? { isNotMached: true }
    : null;
};
