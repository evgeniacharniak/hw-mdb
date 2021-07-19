import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataService } from '@mf-app/features/edit-movie/edit-movie-service/data.service';

import { EditMovieRoutingModule, EDIT_MOVIE_COMPONENTS } from './edit-movie-routing.module';
import { SharedModule } from '@mf-app/shared/shared.module';

import { EditMovieResolver } from '@mf-app/features/edit-movie/edit-movie-resolver/edit-movie.resolver';


@NgModule({
  declarations: [
    EDIT_MOVIE_COMPONENTS,
  ],
  imports: [
    CommonModule,
    EditMovieRoutingModule,
    SharedModule,
  ],
  providers: [
    DataService,
    EditMovieResolver,
  ],
})
export class EditMovieModule { }
