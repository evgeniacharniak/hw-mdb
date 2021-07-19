import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MdbDashboardComponent } from '@mf-app/features/mdb-dashboard/mdb-dashboard.component';

import { MdbDashboardResolver } from '@mf-app/features/mdb-dashboard/mdb-dashboard-resolver/mdb-dashboard.resolver';

const routes: Routes = [
  {
    path: '',
    component: MdbDashboardComponent,
    resolve: { movieViews: MdbDashboardResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MdbDashboardRoutingModule { }

export const MDB_DASHBOARDS_COMPONENTS = [MdbDashboardComponent];
