import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { WatchListComponent } from '@mf-app/shared/watch-list/watch-list.component';

import { MdbDataService } from '@mf-app/shared/mdb-data-service/mdb-data.service';
import { WindowService } from '@mf-app/shared/window-service/window.service';
import { MovieDetailsService } from '@mf-app/shared/movie-details-service/movie-details.service';

import { SharedRoutingModule } from '@mf-app/shared/shared-routing.module';

import { NgStackFormsModule } from '@ng-stack/forms';

const SHARED_COMPONENTS=[WatchListComponent];

@NgModule({
  declarations: [
    SHARED_COMPONENTS,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NgStackFormsModule,
  ],
  providers: [
    MdbDataService,
    WindowService,
    MovieDetailsService,
  ],
  exports: [
    SHARED_COMPONENTS,
    ReactiveFormsModule,
  ],
})
export class SharedModule { }
