import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MovieDetails } from 'src/app/features/movie-details/models/movie-details';
import Movie from '../models';
import { HttpClient } from '@angular/common/http';
import { WatchList } from '../watch-list/models/watch-list';

@Injectable()
export class MdbDataService {

  public constructor(private _httpClient: HttpClient) { }

  public getMoviesList(): Observable<Array<Movie>> {
    return Movie.parseList(this._httpClient.get<Array<Movie>>('movies'));
  }

  public getMovieDetails(movieId: number): Observable<MovieDetails> {
    return MovieDetails.parse(this._httpClient.get<MovieDetails>('movies/' + movieId));
  }

  public getWatchList(): Observable<Array<WatchList>> {
    return WatchList.parseList(this._httpClient.get<Array<WatchList>>('watchList'));
  }

  public getWatchListByMovieId(movieId: number): Observable<WatchList | null> {
    return WatchList.parse(this._httpClient.
      get<Array<WatchList | null>>('watchList').
      pipe(map(arr => { return arr.find(el => el?.movieId == movieId) ?? null; })));
  }

  public addToWatchList(movieId: number): Observable<WatchList | null> {
    return WatchList.parse(
      this._httpClient.post<WatchList>('watchList',
        { "movieId": movieId }));
  }

  public removeFromWatchList(movieId: number): Observable<unknown> {
    return this._httpClient.delete(`watchList/${movieId}`);
  }
}
