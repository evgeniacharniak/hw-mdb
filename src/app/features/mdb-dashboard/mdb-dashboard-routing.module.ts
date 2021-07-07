import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MdbDashboardResolver } from './mdb-dashboard-resolver/mdb-dashboard.resolver';
import { MdbDashboardComponent } from './mdb-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: MdbDashboardComponent,
    resolve: {movieViews: MdbDashboardResolver}
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MdbDashboardRoutingModule { }

export const MDB_DASHBOARDS_COMPONENTS = [MdbDashboardComponent];
