import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditMovieComponent } from '@mf-app/features/edit-movie/edit-movie.component';

import { EditMovieResolver } from '@mf-app/features/edit-movie/edit-movie-resolver/edit-movie.resolver';

const routes: Routes = [
  {
    path: '',
    component: EditMovieComponent,
    resolve: { movieDetails: EditMovieResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditMovieRoutingModule { }
export const EDIT_MOVIE_COMPONENTS = [EditMovieComponent];
