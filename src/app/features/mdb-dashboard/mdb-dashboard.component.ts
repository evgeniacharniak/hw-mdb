import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import Movie from 'src/app/shared/models';
import { MdbDataService } from 'src/app/shared/services/mdb-data.service';
import { orderDirection } from './models/order-direction';
import { ActivatedRoute, Router } from '@angular/router';
import { IWatchList } from 'src/app/shared/watch-list/models/watch-list';
import { IMovieView } from 'src/app/shared/models/movie-view';

@Component({
  selector: 'mf-mdb-dashboard',
  templateUrl: './mdb-dashboard.component.html',
  styleUrls: ['./mdb-dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MdbDashboardComponent {

  private _movieViews!: Array<IMovieView>;
  public get movieViews(): Array<IMovieView> {
    return this._movieViews;
  }

  private _genreList!: Array<string>;
  public get genreList(): Array<string> {
    return this._genreList;
  }

  private _movieSortDirection: orderDirection;
  public get movieSortDirection(): orderDirection {
    return this._movieSortDirection;
  }

  private _movieFilter: string;
  public get movieFilter(): string {
    return this._movieFilter;
  }
  public constructor(private _mdbDataService: MdbDataService,
    private changeDetectorRef: ChangeDetectorRef,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) {
    this._movieSortDirection = 'desc';
    this._movieFilter = 'none';
    this._activatedRoute.queryParams.pipe(take(1)).subscribe(params => {
      this._movieSortDirection = params['orderDirection'];
      this._movieFilter = params['filterGenre'] ? params['filterGenre'] : 'none';
    })
  }

  ngOnInit(): void {
    this._movieViews = this._activatedRoute.snapshot.data.movieViews;
    this._genreList = [...new Set(this._movieViews.map(el => el.genre))];
  }

  public toggleSortHandler(): void {
    this._movieSortDirection = this._movieSortDirection == 'desc' ? 'asc' : 'desc';
    this._router.navigate(['/movies'], {
      queryParams: {
        filterGenre: this._movieFilter,
        orderDirection: this._movieSortDirection
      },
      queryParamsHandling: 'merge'
    });
  }

  public toggleFilterHandler(value: string): void {
    this._movieFilter = value;
    this._router.navigate(['/movies'], {
      queryParams: {
        filterGenre: this._movieFilter,
        orderDirection: this._movieSortDirection
      },
      queryParamsHandling: 'merge'
    });
  }

}
