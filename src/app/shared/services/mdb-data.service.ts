import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { MovieDetails } from 'src/app/features/movie-details/models/movie-details';
import Movie from '../models';
import { HttpClient } from '@angular/common/http';
import { IWatchList } from '../watch-list/models/watch-list';

@Injectable()
export class MdbDataService {

  public constructor(private _httpClient: HttpClient) { }

  public getMoviesList(): Observable<Array<Movie>> {
    return Movie.parseList(this._httpClient.get<Array<Movie>>('movies'));
  }

  public getMovieDetails(movieId: number): Observable<MovieDetails> {
    return MovieDetails.parse(this._httpClient.get<MovieDetails>('movies/' + movieId));
  }

  public getWatchList(): Observable<Array<IWatchList>> {
    return this._httpClient.get<Array<IWatchList>>('watchList');
  }

  public getWatchListByMovieId(movieId: number): Observable<IWatchList | null> {
    return this._httpClient.get<Array<IWatchList | null>>('watchList').
      pipe(map(arr => { return arr.find(el => el?.id == movieId) ?? null; }));
  }

  public addToWatchListByMovieId(movieId: number): Observable<IWatchList | null> {
    return this._httpClient.post<IWatchList>('watchList', {id: movieId});
  }

  public removeFromWatchListByMovieId(movieId: number): Observable<unknown> {
    return this._httpClient.delete(`watchList/${movieId}`);
  }
}
