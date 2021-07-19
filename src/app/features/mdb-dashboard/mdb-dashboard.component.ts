import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { take } from 'rxjs/operators';

import { IMovieView } from '@mf-app/shared/models/movie-view';
import { OrderDirection } from '@mf-app/features/mdb-dashboard/models/order-direction';
import { ONE } from '@mf-app/shared/models/constants';

@Component({
  selector: 'mf-mdb-dashboard',
  templateUrl: './mdb-dashboard.component.html',
  styleUrls: ['./mdb-dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MdbDashboardComponent implements OnInit {

  private _movieViews!: Array<IMovieView>;
  public get movieViews(): Array<IMovieView> {
    return this._movieViews;
  }

  private _genreList!: Array<string>;
  public get genreList(): Array<string> {
    return this._genreList;
  }

  private _movieSortDirection: OrderDirection;
  public get movieSortDirection(): OrderDirection {
    return this._movieSortDirection;
  }

  private _movieFilter: string;
  public get movieFilter(): string {
    return this._movieFilter;
  }

  public constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
  ) {
    this._movieSortDirection = 'desc';
    this._movieFilter = 'none';
    this._activatedRoute.queryParams.pipe(take(ONE)).subscribe(params => {
      this._movieSortDirection = params.orderDirection;
      this._movieFilter = params.filterGenre ? params.filterGenre : 'none';
    });
  }

  public ngOnInit(): void {
    this._movieViews = this._activatedRoute.snapshot.data.movieViews;
    this._genreList = [...new Set(this._movieViews.map(el => el.genre))];
  }

  public toggleSortHandler(): void {
    this._movieSortDirection = this._movieSortDirection === 'desc' ? 'asc' : 'desc';
    this._router.navigate(['/movies'], {
      queryParams: {
        filterGenre: this._movieFilter,
        orderDirection: this._movieSortDirection,
      },
      queryParamsHandling: 'merge',
    });
  }

  public toggleFilterHandler(value: string): void {
    this._movieFilter = value;
    this._router.navigate(['/movies'], {
      queryParams: {
        filterGenre: this._movieFilter,
        orderDirection: this._movieSortDirection,
      },
      queryParamsHandling: 'merge',
    });
  }

  public throwExceptionHandler(): void {
    throw new Error('test error');
  }

}
