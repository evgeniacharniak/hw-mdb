import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdbDashboardRoutingModule, MDB_DASHBOARDS_COMPONENTS } from './mdb-dashboard-routing.module';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MdbDataService } from 'src/app/shared/services/mdb-data.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrderPipe } from './order-pipe/order.pipe';
import { FilterPipe } from './filter-pipe/filter.pipe';
import { MdbDashboardResolver } from './mdb-dashboard-resolver/mdb-dashboard.resolver';


@NgModule({
  declarations: [
    MDB_DASHBOARDS_COMPONENTS,
    MovieCardComponent,
    OrderPipe,
    FilterPipe
  ],
  imports: [
    CommonModule,
    MdbDashboardRoutingModule,
    SharedModule
  ],
  providers: [
    MdbDashboardResolver
  ],
})
export class MdbDashboardModule { }
