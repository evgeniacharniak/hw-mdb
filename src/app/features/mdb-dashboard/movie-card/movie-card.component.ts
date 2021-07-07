import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import Movie from 'src/app/shared/models';
import { IMovieView } from 'src/app/shared/models/movie-view';
import { MDB_DASHBOARD_PATH } from '..';

@Component({
  selector: 'mf-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieCardComponent {

  @Input()
  public movie!: IMovieView;

  constructor() { }

  public getMovieDetailsLink(movie: IMovieView): string {
    return `/${MDB_DASHBOARD_PATH}/${movie.id}`;
  }

}
