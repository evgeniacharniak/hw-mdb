import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { MdbDataService } from '../services/mdb-data.service';
import { WatchList } from './models/watch-list';

@Component({
  selector: 'mf-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WatchListComponent implements OnInit {

  @Input()
  public watchList!: WatchList | null;

  @Input()
  public movieId!: number;

  constructor(private _mdbDataService: MdbDataService,
    private _changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
  }


  public addToWatchListHandler(): void {
    this._mdbDataService.
      addToWatchList(this.movieId).
      pipe(take(1)).subscribe(el => { this.watchList = el; this._changeDetectorRef.markForCheck() });
  }

  public removeFromWatchListHandler(): void {
    this._mdbDataService.removeFromWatchList(this.watchList!.id).
      pipe(take(1)).subscribe({
        next: data => {
          this.watchList = null;
          this._changeDetectorRef.markForCheck();
        }
      }
      );
  }

}
