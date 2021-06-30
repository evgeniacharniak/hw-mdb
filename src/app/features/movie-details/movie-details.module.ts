import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieDetailsRoutingModule, MOVIE_DETAILS_COMPONENTS } from './movie-details-routing.module';


@NgModule({
  declarations: [
    MOVIE_DETAILS_COMPONENTS
  ],
  imports: [
    CommonModule,
    MovieDetailsRoutingModule
  ]
})
export class MovieDetailsModule { }
