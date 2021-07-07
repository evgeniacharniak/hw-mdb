import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailsResolver } from './movie-details-resolver/movie-details.resolver';
import { MovieDetailsComponent } from './movie-details.component';

const routes: Routes = [
  { path: '', component: MovieDetailsComponent,
  resolve: { movieDetails: MovieDetailsResolver }, }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieDetailsRoutingModule { }

export const MOVIE_DETAILS_COMPONENTS = [MovieDetailsComponent]
