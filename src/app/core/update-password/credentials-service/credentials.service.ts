import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { ICredentials } from '@mf-app/shared/models/credentials';
import { ZERO } from '@mf-app/shared/models/constants';

@Injectable()
export class CredentialsService {

  public constructor(private _httpClient: HttpClient) { }

  public checkOldPassword(oldPassword: string): Observable<ICredentials | null> {
    return this._httpClient.get<Array<ICredentials>>('credentials')
      .pipe(map(arr => arr[ZERO].password === oldPassword ? arr[ZERO] : null));
  }

  public updatePassword(oldPassword: string, newPassword: string): Observable<boolean> {
    return this.checkOldPassword(oldPassword).pipe(switchMap(
      value => {
        if (value) {
          return this._httpClient.put<ICredentials>(`credentials/${value.id}`, {
            id: value.id,
            login: value.login,
            password: newPassword,
          }).pipe(map(() => true));
        }
        return of(false);
      },
    ));
  }
}
