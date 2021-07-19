import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MdbDashboardModule } from '@mf-app/features/mdb-dashboard/mdb-dashboard.module';
import { MovieDetailsModule } from '@mf-app/features/movie-details/movie-details.module';
import { EditMovieModule } from '@mf-app/features/edit-movie/edit-movie.module';

import { AuthGuard } from '@mf-app/core/auth-guard/auth.guard';
import { MDB_DASHBOARD_PATH } from '@mf-app/features/mdb-dashboard';
import { EDIT_MOVIE_PATH } from '@mf-app/features/edit-movie';


const routes: Routes = [
  {
    path: MDB_DASHBOARD_PATH,
    canActivate: [AuthGuard],
    loadChildren: ((): Promise<typeof MdbDashboardModule> =>
      import('./features/mdb-dashboard/mdb-dashboard.module').then(m => m.MdbDashboardModule)),
  },
  {
    path: `${MDB_DASHBOARD_PATH}/:id`,
    canActivate: [AuthGuard],
    loadChildren: ((): Promise<typeof MovieDetailsModule> =>
      import('./features/movie-details/movie-details.module').then(m => m.MovieDetailsModule)),
  },
  {
    path: `${EDIT_MOVIE_PATH}/:id`,
    canActivate: [AuthGuard],
    loadChildren: ((): Promise<typeof EditMovieModule> =>
      import('./features/edit-movie/edit-movie.module').then(m => m.EditMovieModule)),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

