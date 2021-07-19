import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export class MovieDetails {
  public get id(): number {
    return this._id;
  }

  public set id(value: number) {
    this._id = value;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get year(): number {
    return this._year;
  }

  public set year(value: number) {
    this._year = value;
  }

  public get description(): string {
    return this._description;
  }

  public set description(value: string) {
    this._description = value;
  }

  public get rating(): number {
    return this._rating;
  }

  public set rating(value: number) {
    this._rating = value;
  }

  public get genre(): string {
    return this._genre;
  }

  public set genre(value: string) {
    this._genre = value;
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
