import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import Movie from 'src/app/shared/models';
import { MdbDataService } from 'src/app/shared/services/mdb-data.service';
import { orderDirection } from './models/order-direction';
import { ActivatedRoute, Router } from '@angular/router';
import { IWatchList } from 'src/app/shared/watch-list/models/watch-list';

@Component({
  selector: 'mf-mdb-dashboard',
  templateUrl: './mdb-dashboard.component.html',
  styleUrls: ['./mdb-dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MdbDashboardComponent {

  private _mdbList$: Observable<Array<Movie>> | null;
  public get mdbList(): Observable<Array<Movie>> | null {
    return this._mdbList$;
  }

  private _watchList!: Array<IWatchList> | null;
  public get watchList(): Array<IWatchList> | null {
    return this._watchList;
  }

  private _genreList$!: Observable<Array<string>> | null;
  public get genreList(): Observable<Array<string>> | null {
    return this._genreList$;
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
    this._mdbList$ = this._mdbDataService.getMoviesList();
    this._mdbDataService.getWatchList().pipe(take(1)).subscribe(value => {
      this._watchList = value;
      changeDetectorRef.markForCheck()
    });
    this._genreList$ = this._mdbList$.pipe(map(arr => arr.map(el => el.genre))).pipe(map(arr => [...new Set(arr)]));
    this._movieSortDirection = 'desc';
    this._movieFilter = 'none';
    this._activatedRoute.queryParams.pipe(take(1)).subscribe(params => {
      this._movieSortDirection = params['orderDirection'];
      this._movieFilter = params['filterGenre'] ? params['filterGenre'] : 'none';
    })
  }

  public findWatchFlagById(movieId: number): boolean {
    return !!this._watchList!.find(el => el.id == movieId);
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
