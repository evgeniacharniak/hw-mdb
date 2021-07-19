import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieCardComponent } from '@mf-app/features/mdb-dashboard/movie-card/movie-card.component';

import { OrderPipe } from '@mf-app/features/mdb-dashboard/order-pipe/order.pipe';
import { FilterPipe } from '@mf-app/features/mdb-dashboard/filter-pipe/filter.pipe';

import { MdbDashboardRoutingModule, MDB_DASHBOARDS_COMPONENTS } from '@mf-app/features/mdb-dashboard/mdb-dashboard-routing.module';
import { SharedModule } from '@mf-app/shared/shared.module';

import { MdbDashboardResolver } from '@mf-app/features/mdb-dashboard/mdb-dashboard-resolver/mdb-dashboard.resolver';


@NgModule({
  declarations: [
    MDB_DASHBOARDS_COMPONENTS,
    MovieCardComponent,
    OrderPipe,
    FilterPipe,
  ],
  imports: [
    CommonModule,
    MdbDashboardRoutingModule,
    SharedModule,
  ],
  providers: [
    MdbDashboardResolver,
  ],
})
export class MdbDashboardModule { }
