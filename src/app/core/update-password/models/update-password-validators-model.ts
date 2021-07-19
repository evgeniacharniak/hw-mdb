import { ValidatorsModel } from '@ng-stack/forms';

export declare class UpdatePasswordValidatorsModel extends ValidatorsModel {
  public isNotMached: true;
  public isWeakPassword: true;
  public isOldPasswordIncorrect: true;
}
