import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { WatchListComponent } from './watch-list/watch-list.component';


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
  ]
})
export class SharedModule { }
