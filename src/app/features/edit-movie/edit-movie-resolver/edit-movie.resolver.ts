import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { MovieDetailsService } from '@mf-app/shared/movie-details-service/movie-details.service';

import { MovieDetails } from '@mf-app/shared/models/movie-details';
import { PAGE_NOT_FOUND_PATH } from '@mf-app/core/page-not-found';


@Injectable()
export class EditMovieResolver implements Resolve<MovieDetails> {

  public constructor(private _movieDetailsService: MovieDetailsService,
    private _router: Router) { }

  public resolve(route: ActivatedRouteSnapshot): Observable<MovieDetails> {
    return this._movieDetailsService.getMovieDetails(route.params.id).pipe(map(
      data => {
        console.log(data);
        return data;
      },
      (error: unknown) => {
        console.log(error);
        this._router.navigate([PAGE_NOT_FOUND_PATH]);
        return error;
      },
    ));
  }
}

