import { AbstractControl } from '@angular/forms';

import { ValidatorFn } from '@ng-stack/forms';

export const PASSWORD_STRONG_VALIDATOR = (regexp: RegExp): ValidatorFn =>
  (control: AbstractControl): { weakpassword: true } | null => {
    if (control.dirty && !regexp.test(control.value)) {
      return { weakpassword: true };
    }
    return null;
  };
