import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { LogoutComponent } from '@mf-app/core/logout/logout.component';

import { AuthService } from '@mf-app/core/auth-service/auth.service';

import { CoreRoutingModule } from '@mf-app/core/core-routing.module';
import { SharedModule } from '@mf-app/shared/shared.module';

import { AuthGuard } from '@mf-app/core/auth-guard/auth.guard';
import { UrlInterceptor } from '@mf-app/core/url-interceptor/url.interceptor';
import { ExcetionHandler } from '@mf-app/core/exception-handler/exception.handler';


@NgModule({
  declarations: [
    LogoutComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    RouterModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UrlInterceptor,
      multi: true,
    },
    {
      provide: ErrorHandler,
      useClass: ExcetionHandler,
    },
  ],
  exports: [
    LogoutComponent,
  ],
})
export class CoreModule { }
