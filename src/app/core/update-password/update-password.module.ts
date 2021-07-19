import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CredentialsService } from '@mf-app/core/update-password/credentials-service/credentials.service';

import { UpdatePasswordRoutingModule, UPDATE_PASSWORD_COMPONENTS } from '@mf-app/core/update-password/update-password-routing.module';
import { SharedModule } from '@mf-app/shared/shared.module';


@NgModule({
  declarations: [
    UPDATE_PASSWORD_COMPONENTS,
  ],
  imports: [
    CommonModule,
    UpdatePasswordRoutingModule,
    SharedModule,
  ],
  providers: [
    CredentialsService,
  ],
})
export class UpdatePasswordModule { }
