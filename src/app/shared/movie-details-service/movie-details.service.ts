import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { MovieDetails } from '@mf-app/shared/models/movie-details';

@Injectable()
export class MovieDetailsService {

  public constructor(private _httpClient: HttpClient) { }

  public getMovieDetails(movieId: number): Observable<MovieDetails> {
    return MovieDetails.parse(this._httpClient.get<MovieDetails>(`movies/${movieId}`));
  }

  public updateMovie(movieDetails: MovieDetails): Observable<MovieDetails> {
    return this._httpClient.put<MovieDetails>(`movies/${movieDetails.id}`, {
      id: movieDetails.id,
      name: movieDetails.name,
      description: movieDetails.description,
      rating: movieDetails.rating,
      year: movieDetails.year,
      genre: movieDetails.genre,
    });
  }
}
