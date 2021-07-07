import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { WatchListComponent } from './watch-list/watch-list.component';
import { MdbDataService } from './services/mdb-data.service';


@NgModule({
  declarations: [
    WatchListComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    WatchListComponent
  ],
  providers: [
    MdbDataService
  ]
})
export class SharedModule { }
