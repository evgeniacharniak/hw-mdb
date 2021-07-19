import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';

import { WindowService } from '@mf-app/shared/window-service/window.service';

import { OOPS_PATH } from '@mf-app/core/oops';

@Injectable()
export class ExcetionHandler extends ErrorHandler {
  public constructor(private _router: Router,
    private _ngZone: NgZone,
    private _windowService: WindowService) {
    super();
  }

  public handleError(error: Error): void {
    console.error(error);
    this._ngZone.run(() =>
      this._router.navigate([OOPS_PATH])
        .then(() => {
          if (!this._router.url.includes(OOPS_PATH)) {
            this._windowService.nativeWindow.location.href = OOPS_PATH;
          }
        }));
  }
}
