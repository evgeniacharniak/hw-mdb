import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MdbDataService } from 'src/app/shared/services/mdb-data.service';
import { MovieDetails } from './models/movie-details';
import { take } from 'rxjs/operators';

@Component({
  selector: 'mf-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  private _movieDetails!: MovieDetails;
  public get movieDetails(): MovieDetails {
    return this._movieDetails;
  }

  public constructor(private route: ActivatedRoute, private _mdbDataService: MdbDataService) { }

  ngOnInit(): void {
    let movieId: number = parseInt(this.route.snapshot.paramMap.get('id') ?? '0');
    this._mdbDataService.getMovieDetails(movieId).pipe(take(1)).
    subscribe(movie => this._movieDetails = movie);
  }


}
