import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundModule } from '@mf-app/core/page-not-found/page-not-found.module';
import { LoginModule } from '@mf-app/core/login/login.module';
import { OopsModule } from '@mf-app/core/oops/oops.module';
import { UpdatePasswordModule } from '@mf-app/core/update-password/update-password.module';

import { LOGIN_PATH } from '@mf-app/core/login';
import { PAGE_NOT_FOUND_PATH } from '@mf-app/core/page-not-found';
import { OOPS_PATH } from '@mf-app/core/oops';
import { UPDATE_PASSWORD_PATH } from '@mf-app/core/update-password';
import { AuthGuard } from '@mf-app/core/auth-guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: LOGIN_PATH,
    pathMatch: 'full',
  },
  {
    path: LOGIN_PATH,
    loadChildren: ((): Promise<typeof LoginModule> => import('./login/login.module').then(m => m.LoginModule)),
  },
  {
    path: OOPS_PATH,
    loadChildren: ((): Promise<typeof OopsModule> => import('./oops/oops.module').then(m => m.OopsModule)),
  },
  {
    path: UPDATE_PASSWORD_PATH,
    canActivate: [AuthGuard],
    loadChildren: ((): Promise<typeof UpdatePasswordModule> =>
      import('@mf-app/core/update-password/update-password.module').then(m => m.UpdatePasswordModule)),
  },
  {
    path: '**',
    redirectTo: PAGE_NOT_FOUND_PATH,
    pathMatch: 'full',
  },
  {
    path: PAGE_NOT_FOUND_PATH,
    loadChildren: ((): Promise<typeof PageNotFoundModule> =>
      import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule { }
