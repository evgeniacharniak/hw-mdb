import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MDB_DASHBOARD_PATH } from './features/mdb-dashboard';

const routes: Routes = [
  {
    path: MDB_DASHBOARD_PATH,
    loadChildren: (()=>import('./features/mdb-dashboard/mdb-dashboard.module').then(m=>m.MdbDashboardModule))
  },

  {
    path: MDB_DASHBOARD_PATH + '/:id',
    loadChildren: (()=>import('./features/movie-details/movie-details.module').then(m=>m.MovieDetailsModule))
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// export const ROUTING_COMPONENT = []
