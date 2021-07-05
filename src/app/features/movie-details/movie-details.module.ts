import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieDetailsRoutingModule, MOVIE_DETAILS_COMPONENTS } from './movie-details-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    MOVIE_DETAILS_COMPONENTS,
  ],
  imports: [
    CommonModule,
    MovieDetailsRoutingModule,
    SharedModule
  ]
})
export class MovieDetailsModule { }
