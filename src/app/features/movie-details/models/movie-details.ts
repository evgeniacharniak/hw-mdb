export class MovieDetails {
  public get details(): string {
    return this._details;
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

  public constructor (private _id: number,
    private _name: string, private _year: number,
    private _details: string, private _rating: number) {
  }
}
