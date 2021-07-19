import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router';


import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { MdbDataService } from '@mf-app/shared/mdb-data-service/mdb-data.service';

import { IMovieDetailsView } from '@mf-app/features/movie-details/models/movie-details-view';

@Injectable()
export class MovieDetailsResolver implements Resolve<IMovieDetailsView> {

  public constructor(private _mdbDataService: MdbDataService) { }

  public resolve(route: ActivatedRouteSnapshot): Observable<IMovieDetailsView> {
    return combineLatest(
      [
        this._mdbDataService.getMovieDetails(route.params.id), this._mdbDataService.getWatchListByMovieId(route.params.id),
      ],
    )
      .pipe(map(([movie, isWatch]) => ({
        id: movie.id,
        name: movie.name,
        year: movie.year,
        description: movie.description,
        rating: movie.rating,
        genre: movie.genre,
        isInWatchList: Boolean(isWatch),
      })));
  }
}
