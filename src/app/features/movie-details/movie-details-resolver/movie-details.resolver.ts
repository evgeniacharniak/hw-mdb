import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { combineLatest, Observable, of } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { MdbDataService } from 'src/app/shared/services/mdb-data.service';
import { IMovieDetailsView } from '../models/movie-details-view';

@Injectable()
export class MovieDetailsResolver implements Resolve<IMovieDetailsView> {

  public constructor(private _mdbDataService: MdbDataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IMovieDetailsView> {
    return combineLatest([this._mdbDataService.getMovieDetails(route.params.id), this._mdbDataService.getWatchListByMovieId(route.params.id)])
      .pipe(map(([movie, isWatch]) => {
        return {
          id: movie.id,
          name: movie.name,
          year: movie.year,
          description: movie.description,
          rating: movie.rating,
          genre: movie.genre,
          isInWatchList: isWatch ? true : false
        };
      }
      ));
  }
}
