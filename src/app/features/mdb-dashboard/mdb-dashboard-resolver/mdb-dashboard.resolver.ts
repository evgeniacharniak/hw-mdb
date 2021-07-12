import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { combineLatest, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { IMovieView } from 'src/app/shared/models/movie-view';
import { MdbDataService } from 'src/app/shared/services/mdb-data.service';

@Injectable()
export class MdbDashboardResolver implements Resolve<Array<IMovieView>> {

  public constructor(private _mdbDataService: MdbDataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<IMovieView>> {
    return combineLatest([this._mdbDataService.getMoviesList(), this._mdbDataService.getWatchList()])
      .pipe(map(([movies, watchList]) => {
        return movies.map(movie => {
          return {
            id: movie.id,
            name: movie.name,
            rating: movie.rating,
            genre: movie.genre,
            isInWatchList: !!watchList.find(rec => rec.id == movie.id)
          }
        });
      }));
  }
}
