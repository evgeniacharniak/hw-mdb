import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MDB_DASHBOARD_PATH } from '@mf-app/features/mdb-dashboard';
import { IMovieDetailsView } from '@mf-app/features/movie-details/models/movie-details-view';

@Component({
  selector: 'mf-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieDetailsComponent implements OnInit {

  private _movieDetailsView!: IMovieDetailsView;
  public get movieDetailsView(): IMovieDetailsView {
    return this._movieDetailsView;
  }

  public constructor(private _route: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this._movieDetailsView = this._route.snapshot.data.movieDetails;
  }

  public getMdbDashboardLink(): string {
    return `../../${MDB_DASHBOARD_PATH}`;
  }
}
