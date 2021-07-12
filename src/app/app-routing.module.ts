import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth-guard/auth.guard';
import { MDB_DASHBOARD_PATH } from './features/mdb-dashboard';
import { MovieDetailsResolver } from './features/movie-details/movie-details-resolver/movie-details.resolver';
import { UPDATE_PASSWORD_PATH } from './features/update-password';

const routes: Routes = [
  {
    path: MDB_DASHBOARD_PATH,
    canActivate: [AuthGuard],
    loadChildren: (() => import('./features/mdb-dashboard/mdb-dashboard.module').then(m => m.MdbDashboardModule))
  },
  {
    path: `${MDB_DASHBOARD_PATH}/:id`,
    canActivate: [AuthGuard],
    loadChildren: (() => import('./features/movie-details/movie-details.module').then(m => m.MovieDetailsModule))
  },
  {
    path: UPDATE_PASSWORD_PATH,
    canActivate: [AuthGuard],
    loadChildren: (() => import('./features/update-password/update-password.module').then(m => m.UpdatePasswordModule))
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

