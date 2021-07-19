import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { take } from 'rxjs/operators';

import { MdbDataService } from '@mf-app/shared/mdb-data-service/mdb-data.service';

import { ONE } from '@mf-app/shared/models/constants';


@Component({
  selector: 'mf-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WatchListComponent {

  @Input()
  public isInWhatchList!: boolean;

  @Input()
  public movieId!: number;

  public constructor(private _mdbDataService: MdbDataService) { }

  public addToWatchListHandler(): void {
    this._mdbDataService.addToWatchListByMovieId(this.movieId).pipe(take(ONE))
      .subscribe();
    this.isInWhatchList = true;
  }

  public removeFromWatchListHandler(): void {
    this._mdbDataService.removeFromWatchListByMovieId(this.movieId).pipe(take(ONE))
      .subscribe();
    this.isInWhatchList = false;
  }

}
