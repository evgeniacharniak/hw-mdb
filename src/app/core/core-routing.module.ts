import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LOGIN_PATH } from './login';
import { PAGE_NOT_FOUND_PATH } from './page-not-found';

const routes: Routes = [
  {
    path: '',
    redirectTo: LOGIN_PATH,
    pathMatch: 'full'
  },
  {
    path: LOGIN_PATH,
    loadChildren: (()=>import('./login/login.module').then(m=>m.LoginModule))
  },
  {
    path: '**',
    redirectTo: PAGE_NOT_FOUND_PATH,
    pathMatch: 'full'
  },
  {
    path: PAGE_NOT_FOUND_PATH,
    loadChildren: (()=>import('./page-not-found/page-not-found.module').then(m=>m.PageNotFoundModule))
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
