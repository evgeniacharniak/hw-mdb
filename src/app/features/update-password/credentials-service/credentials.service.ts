import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable, of } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { ICredentials } from 'src/app/shared/models/credentials';

@Injectable()
export class CredentialsService {

  public constructor(private _httpClient: HttpClient) { }

  public checkOldPassword(oldPassword: string): Observable<ICredentials | null> {
    return this._httpClient.get<Array<ICredentials>>('credentials').
      pipe(map(arr => arr[0].password === oldPassword ? arr[0] : null));
  }

  public updatePassword(oldPassword: string, newPassword: string): Observable<boolean> {
    return this.checkOldPassword(oldPassword).pipe(switchMap(
      value => {
        if (!!value) {
          return this._httpClient.put<ICredentials>(`credentials/${value.id}`, {
            id: value.id,
            login: value.login,
            password: newPassword,
          }).pipe(map(value => true));
        }
        return of(false);
      }
    ));
  }
}
