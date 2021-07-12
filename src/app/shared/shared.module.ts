import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { WatchListComponent } from './watch-list/watch-list.component';
import { MdbDataService } from './services/mdb-data.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NgStackFormsModule } from '@ng-stack/forms';


@NgModule({
  declarations: [
    WatchListComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NgStackFormsModule,
  ],
  providers: [
    MdbDataService
  ],
  exports: [
    WatchListComponent,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
