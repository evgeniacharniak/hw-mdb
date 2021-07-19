import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Movie } from '@mf-app/shared/models';
import { MovieDetails } from '@mf-app/shared/models/movie-details';
import { IWatchList } from '@mf-app/shared/watch-list/models/watch-list';

@Injectable()
export class MdbDataService {

  public constructor(private _httpClient: HttpClient) { }

  public getMoviesList(): Observable<Array<Movie>> {
    return Movie.parseList(this._httpClient.get<Array<Movie>>('movies'));
  }

  public getMovieDetails(movieId: number): Observable<MovieDetails> {
    return MovieDetails.parse(this._httpClient.get<MovieDetails>(`movies/${ movieId}`));
  }

  public getWatchList(): Observable<Array<IWatchList>> {
    return this._httpClient.get<Array<IWatchList>>('watchList');
  }

  public getWatchListByMovieId(movieId: number): Observable<IWatchList | null> {
    return this._httpClient.get<Array<IWatchList | null>>('watchList')
      .pipe(map(arr => arr.find(el => el?.id === movieId) ?? null));
  }

  public addToWatchListByMovieId(movieId: number): Observable<IWatchList | null> {
    return this._httpClient.post<IWatchList>('watchList', { id: movieId });
  }

  public removeFromWatchListByMovieId(movieId: number): Observable<unknown> {
    return this._httpClient.delete(`watchList/${movieId}`);
  }

  public updateMovie(movieDetails: MovieDetails): Observable<MovieDetails> {
    return this._httpClient.put<MovieDetails>('movies', {
      id: movieDetails.id,
      name: movieDetails.name,
      description: movieDetails.description,
      rating: movieDetails.rating,
      year: movieDetails.year,
      genre: movieDetails.genre,
    });

  }
}
