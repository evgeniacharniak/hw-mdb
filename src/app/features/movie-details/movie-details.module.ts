import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReviewListComponent } from './review-list/review-list.component';

import { SharedModule } from '@mf-app/shared/shared.module';
import { MovieDetailsRoutingModule, MOVIE_DETAILS_COMPONENTS } from '@mf-app/features/movie-details/movie-details-routing.module';

import { MovieDetailsResolver } from '@mf-app/features/movie-details/movie-details-resolver/movie-details.resolver';
import { ReviewComponent } from './review/review.component';


@NgModule({
  declarations: [
    MOVIE_DETAILS_COMPONENTS,
    ReviewListComponent,
    ReviewComponent,
  ],
  imports: [
    CommonModule,
    MovieDetailsRoutingModule,
    SharedModule,
  ],
  providers: [
    MovieDetailsResolver,
  ],
})
export class MovieDetailsModule { }
