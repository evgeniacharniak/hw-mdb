import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MdbDataService } from 'src/app/shared/services/mdb-data.service';
import { MovieDetails } from './models/movie-details';
import { take } from 'rxjs/operators';
import { MDB_DASHBOARD_PATH } from '../mdb-dashboard';
import { WatchList } from 'src/app/shared/watch-list/models/watch-list';

@Component({
  selector: 'mf-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieDetailsComponent implements OnInit {

  private _movieDetails!: MovieDetails;
  public get movieDetails(): MovieDetails {
    return this._movieDetails;
  }

  private _watchList!: WatchList | null;
  public get watchList(): WatchList | null {
    return this._watchList;
  }

  public constructor(private route: ActivatedRoute,
    private _mdbDataService: MdbDataService,
    private _changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    let movieId: number = parseInt(this.route.snapshot.paramMap.get('id') ?? '0');
    this._mdbDataService.getMovieDetails(movieId).pipe(take(1)).
      subscribe(movie => this._movieDetails = movie);
    this._mdbDataService.getWatchListByMovieId(movieId).pipe(take(1)).
      subscribe(watchFlag => {
        this._watchList = watchFlag;
        this._changeDetectorRef.markForCheck();
      });
  }

  public getMdbDashboardLink(): string {
    return '../../' + MDB_DASHBOARD_PATH;
  }

  public addToWatchListHandler(): void {
    this._mdbDataService.
      addToWatchList(this._movieDetails.id).
      pipe(take(1)).subscribe(el => { this._watchList = el; this._changeDetectorRef.markForCheck() });
  }

  public removeFromWatchListHandler(): void {
    this._mdbDataService.removeFromWatchList(this._watchList!.id!).pipe(take(1)).subscribe({
        next: data => {
          this._watchList = null;
          this._changeDetectorRef.markForCheck();
        }
    }
    );
  }
}
