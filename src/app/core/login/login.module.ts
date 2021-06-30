import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule, LOGIN_COMPONENTS } from './login-routing.module';


@NgModule({
  declarations: [
    LOGIN_COMPONENTS
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
