import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";

export class WatchList {
  public get id(): number {
    return this._id;
  }

  public get movieId(): number {
    return this._movieId;
  }

  public constructor(private _id: number, private _movieId: number) { }

  public static parseList(movieList: Observable<Array<WatchList>>): Observable<Array<WatchList>> {
    return movieList.pipe(map(list => list.map(m => new WatchList(m.id, m.movieId))));
  }

  public static parse(movieList: Observable<WatchList | null>): Observable<WatchList | null> {
    return movieList.pipe(map(m => { return m ? new WatchList(m.id, m.movieId) : null; }));
  }
}
