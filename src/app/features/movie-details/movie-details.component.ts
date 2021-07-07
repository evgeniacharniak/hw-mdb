import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MdbDataService } from 'src/app/shared/services/mdb-data.service';
import { MovieDetails } from './models/movie-details';
import { take } from 'rxjs/operators';
import { MDB_DASHBOARD_PATH } from '../mdb-dashboard';
import { IWatchList } from 'src/app/shared/watch-list/models/watch-list';
import { IMovieDetailsView } from './models/movie-details-view';

@Component({
  selector: 'mf-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieDetailsComponent implements OnInit {

  private _movieDetailsView!: IMovieDetailsView;
  public get movieDetailsView(): IMovieDetailsView {
    return this._movieDetailsView;
  }

  public constructor(private _route: ActivatedRoute,
    private _mdbDataService: MdbDataService,
    private _changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this._movieDetailsView = this._route.snapshot.data.movieDetails;
  }

  public getMdbDashboardLink(): string {
    return '../../' + MDB_DASHBOARD_PATH;
  }
}
