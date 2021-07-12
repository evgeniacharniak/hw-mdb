import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdatePasswordRoutingModule, UPDATE_PASSWORD_COMPONENTS } from './update-password-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CredentialsService } from './credentials-service/credentials.service';


@NgModule({
  declarations: [
    UPDATE_PASSWORD_COMPONENTS
  ],
  imports: [
    CommonModule,
    UpdatePasswordRoutingModule,
    SharedModule
  ],
  providers: [
    CredentialsService
  ]
})
export class UpdatePasswordModule { }
