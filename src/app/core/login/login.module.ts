import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@mf-app/shared/shared.module';
import { LoginRoutingModule, LOGIN_COMPONENTS } from '@mf-app/core/login/login-routing.module';


@NgModule({
  declarations: [
    LOGIN_COMPONENTS,
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedModule,
  ],
})
export class LoginModule { }
