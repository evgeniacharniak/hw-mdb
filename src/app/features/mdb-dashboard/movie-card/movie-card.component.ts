import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { EDIT_MOVIE_PATH } from '@mf-app/features/edit-movie';
import { MDB_DASHBOARD_PATH } from '@mf-app/features/mdb-dashboard';
import { IMovieView } from '@mf-app/shared/models/movie-view';

@Component({
  selector: 'mf-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieCardComponent {

  @Input()
  public movie!: IMovieView;

  public constructor(private _router: Router) {}

  public getMovieDetailsLink(movie: IMovieView): string {
    return `/${MDB_DASHBOARD_PATH}/${movie.id}`;
  }

  public editHandler(movie: IMovieView): void {
    this._router.navigate([`/${EDIT_MOVIE_PATH}/${movie.id}`]);
  }

}
