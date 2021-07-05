import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import Movie from 'src/app/shared/models';
import { MDB_DASHBOARD_PATH } from '..';

@Component({
  selector: 'mf-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieCardComponent {

  @Input()
  public movie!: Movie;

  constructor() { }

  public getMovieDetailsLink(movie: Movie): string {
    return `/${MDB_DASHBOARD_PATH}/${movie.id}`;
  }

}
