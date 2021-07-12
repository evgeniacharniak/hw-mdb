import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";

export class Movie {
  public get rating(): number {
    return this._rating;
  }
  public get name(): string {
    return this._name;
  }
  public get genre(): string {
    return this._genre;
  }
  public get id(): number {
    return this._id;
  }

  public constructor(private _id: number, private _name: string, private _rating: number, private _genre: string) {}

  public static parseList(movieList: Observable<Array<Movie>>): Observable<Array<Movie>> {
    return movieList.pipe(map(list => list.map(m => new Movie(m.id, m.name, m.rating, m.genre))));
  }
}
