import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OopsRoutingModule, OOPS_COMPONENTS } from '@mf-app/core/oops/oops-routing.module';
import { SharedModule } from '@mf-app/shared/shared.module';


@NgModule({
  declarations: [
    OOPS_COMPONENTS,
  ],
  imports: [
    CommonModule,
    OopsRoutingModule,
    SharedModule,
  ],
})
export class OopsModule { }
