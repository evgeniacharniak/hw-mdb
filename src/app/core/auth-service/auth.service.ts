import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { ICredentials } from 'src/app/shared/models/credentials';

@Injectable()
export class AuthService {

  private _isLoggedIn: boolean = false;
  public get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  public constructor(private _httpClient: HttpClient) {
  }

  public logInToggle(credentials: ICredentials): Observable<boolean> {
    return this._httpClient.get<Array<ICredentials>>('credentials').pipe(map(
      arr => {
        this._isLoggedIn = !!arr.find(el => (el.login === credentials.login && el.password === credentials.password));
        return this._isLoggedIn;
      }
    ));
  }

  public logOutToggle(): void {
    this._isLoggedIn = false;
  }

}
