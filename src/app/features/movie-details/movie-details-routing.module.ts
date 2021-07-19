import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieDetailsComponent } from '@mf-app/features/movie-details/movie-details.component';

import { MovieDetailsResolver } from '@mf-app/features/movie-details/movie-details-resolver/movie-details.resolver';

const routes: Routes = [
  { path: '', component: MovieDetailsComponent,
    resolve: { movieDetails: MovieDetailsResolver } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieDetailsRoutingModule { }

export const MOVIE_DETAILS_COMPONENTS = [MovieDetailsComponent];
