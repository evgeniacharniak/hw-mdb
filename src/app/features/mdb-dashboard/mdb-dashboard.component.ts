import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import Movie from 'src/app/shared/models';
import { WatchList } from 'src/app/shared/watch-list/models/watch-list';
import { MdbDataService } from 'src/app/shared/services/mdb-data.service';
import { orderDirection } from './models/order-direction';

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

  private _watchList!: Array<WatchList> | null;
  public get watchList(): Array<WatchList> | null {
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

  // public constructor(private _mdbDataService: MdbDataService) {
  //   this._mdbList = this._mdbDataService.getMoviesList();
  //   this._watchList = this._mdbDataService.getWatchList();
  // }

  // public findWatchFlagById(movieId: number): Observable<WatchList | null> {
  //   let watchList: WatchList | null;
  //   return this._watchList!.pipe(map(arr => arr.find(el => el.movieId == movieId) ?? null ));
  // }


  public constructor(private _mdbDataService: MdbDataService, private changeDetectorRef: ChangeDetectorRef) {
    this._mdbList$ = this._mdbDataService.getMoviesList();
    this._mdbDataService.getWatchList().pipe(take(1)).subscribe(value => {
      this._watchList = value;
      changeDetectorRef.markForCheck()
    });
    this._genreList$ = this._mdbList$.pipe(map(arr => arr.map(el => el.genre))).pipe(map(arr => [...new Set(arr)]));
    this._movieSortDirection = 'DESC';
    this._movieFilter = 'none';
  }

  public findWatchFlagById(movieId: number): WatchList | null {
    let watchList: WatchList | null;
    // this._watchList!.pipe(map(arr => arr.find(el => el.movieId == movieId) ?? null ));
    watchList = this._watchList!.find(el => el.movieId == movieId) ?? null;
    return watchList;
  }

  public toggleSortHandler(): void {
    this._movieSortDirection = this._movieSortDirection == 'DESC' ? 'ASC' : 'DESC';
  }

  public toggleFilterHandler(value: string): void {
    this._movieFilter = value;
  }

}
