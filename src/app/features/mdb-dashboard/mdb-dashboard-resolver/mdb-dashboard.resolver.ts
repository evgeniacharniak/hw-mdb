import { Injectable } from '@angular/core';
import {
  Resolve,
} from '@angular/router';


import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { MdbDataService } from '@mf-app/shared/mdb-data-service/mdb-data.service';

import { IMovieView } from '@mf-app/shared/models/movie-view';

@Injectable()
export class MdbDashboardResolver implements Resolve<Array<IMovieView>> {

  public constructor(private _mdbDataService: MdbDataService) { }

  public resolve(): Observable<Array<IMovieView>> {
    console.log('resolver');
    return combineLatest([this._mdbDataService.getMoviesList(), this._mdbDataService.getWatchList()])
      .pipe(map(([movies, watchList]) => movies.map(movie => ({
        id: movie.id,
        name: movie.name,
        rating: movie.rating,
        genre: movie.genre,
        isInWatchList: Boolean(watchList.find(rec => rec.id === movie.id)),
      }))));
  }
}
