import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { MdbDataService } from '../services/mdb-data.service';

@Component({
  selector: 'mf-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WatchListComponent implements OnInit {

  @Input()
  public isInWhatchList!: boolean;

  @Input()
  public movieId!: number;

  constructor(private _mdbDataService: MdbDataService,
    private _changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  public addToWatchListHandler(): void {
    this._mdbDataService.addToWatchListByMovieId(this.movieId).pipe(take(1)).subscribe();
      this.isInWhatchList = true;
  }

  public removeFromWatchListHandler(): void {
    this._mdbDataService.removeFromWatchListByMovieId(this.movieId).pipe(take(1)).subscribe();
    this.isInWhatchList = false;
  }

}
