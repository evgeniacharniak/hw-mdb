import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import Movie from 'src/app/shared/models';
import { MdbDataService } from 'src/app/shared/services/mdb-data.service';

@Component({
  selector: 'mf-mdb-dashboard',
  templateUrl: './mdb-dashboard.component.html',
  styleUrls: ['./mdb-dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MdbDashboardComponent {

  private _mdbList: Observable<Array<Movie>> | null;
  public get mdbList(): Observable<Array<Movie>> | null {
    return this._mdbList;
  }

  public constructor(mdbDataService: MdbDataService) {
    this._mdbList = mdbDataService.getMovieList();
  }

}
