import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdbDashboardRoutingModule, MDB_DASHBOARDS_COMPONENTS } from './mdb-dashboard-routing.module';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { MdbDataService } from 'src/app/shared/services/mdb-data.service';


@NgModule({
  declarations: [
    MDB_DASHBOARDS_COMPONENTS,
    MovieCardComponent,
  ],
  imports: [
    CommonModule,
    MdbDashboardRoutingModule
  ],
  providers: [
    MdbDataService,
  ],
})
export class MdbDashboardModule { }
