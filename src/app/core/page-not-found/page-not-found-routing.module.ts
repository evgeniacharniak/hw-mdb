import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from '@mf-app/core/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageNotFoundRoutingModule { }

export const PAGE_NOT_FOUND_COMPONENT = [PageNotFoundComponent];
