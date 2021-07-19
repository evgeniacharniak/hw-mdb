import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundRoutingModule, PAGE_NOT_FOUND_COMPONENT } from '@mf-app/core/page-not-found/page-not-found-routing.module';


@NgModule({
  declarations: [
    PAGE_NOT_FOUND_COMPONENT,
  ],
  imports: [
    CommonModule,
    PageNotFoundRoutingModule,
  ],
})
export class PageNotFoundModule { }
