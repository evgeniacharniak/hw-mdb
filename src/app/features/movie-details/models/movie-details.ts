import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export class MovieDetails {
  public get genre(): string {
    return this._genre;
  }
  public get description(): string {
    return this._description;
  }
  public get year(): number {
    return this._year;
  }
  public get rating(): number {
    return this._rating;
  }
  public get name(): string {
    return this._name;
  }
  public get id(): number {
    return this._id;
  }

  public constructor(private _id: number,
    private _name: string, private _year: number,
    private _description: string, private _rating: number,
    private _genre: string) {
  }

  public static parse(movieDetails: Observable<MovieDetails>): Observable<MovieDetails> {
    return movieDetails.pipe(map(m => new MovieDetails(m.id, m.name, m.year, m.description, m.rating, m.genre)));
  }
}

export interface IMovieDetailsView {
  id: number,
  name: string,
  year: number,
  description: string,
  rating: number,
  genre: string
  isInWatchList: boolean
}
