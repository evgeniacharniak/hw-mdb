import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UrlInterceptor } from './url-interceptor/url.interceptor';
import { AuthService } from './auth-service/auth.service';
import { AuthGuard } from './auth-guard/auth.guard';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    LogoutComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UrlInterceptor,
      multi: true
    },
  ],
  exports: [
    LogoutComponent
  ]
})
export class CoreModule { }
