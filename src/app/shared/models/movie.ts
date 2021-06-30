import { Observable, of } from "rxjs";

export class Movie {

  public get rating(): number {
    return this._rating;
  }
  public get name(): string {
    return this._name;
  }
  public get id(): number {
    return this._id;
  }

  public constructor (private _id: number, private _name: string, private _rating: number) {

  }

  public static parseList(): Observable<Array<Movie>> {
    return of(); //todo
  }
}
