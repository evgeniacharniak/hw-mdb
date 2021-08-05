import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

import { WatchListComponent } from '@mf-app/shared/watch-list/watch-list.component';
import { ModalComponent } from './modal/modal.component';

import { MdbDataService } from '@mf-app/shared/mdb-data-service/mdb-data.service';
import { WindowService } from '@mf-app/shared/window-service/window.service';
import { MovieDetailsService } from '@mf-app/shared/movie-details-service/movie-details.service';

import { SharedRoutingModule } from '@mf-app/shared/shared-routing.module';

import { NgStackFormsModule } from '@ng-stack/forms';


const SHARED_COMPONENTS=[WatchListComponent];
const SHARED_MATERIAL_MODULES=[MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatIconModule];

@NgModule({
  declarations: [
    SHARED_COMPONENTS,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NgStackFormsModule,
    SHARED_MATERIAL_MODULES,
  ],
  providers: [
    MdbDataService,
    WindowService,
    MovieDetailsService,
  ],
  exports: [
    SHARED_COMPONENTS,
    ReactiveFormsModule,
    SHARED_MATERIAL_MODULES,
  ],
})
export class SharedModule { }
