import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Validators } from '@angular/forms';

import { take } from 'rxjs/operators';

import { MovieDetailsService } from '@mf-app/shared/movie-details-service/movie-details.service';

import { PropType } from '@mf-app/shared/models';
import { FormBuilder, FormControl, FormGroup } from '@ng-stack/forms';
import { MDB_DASHBOARD_PATH } from '@mf-app/features/mdb-dashboard';
import { MovieDetails } from '@mf-app/shared/models/movie-details';
import { IMovieEditView } from '@mf-app/features/edit-movie/models/movie-edit-view';
import { ONE, ZERO } from '@mf-app/shared/models/constants';

const MIN_YEAR = 1900;
const MAX_RATING = 10;

@Component({
  selector: 'mf-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditMovieComponent implements OnInit {

  private _movieDetails!: MovieDetails;
  public get movieDetails(): IMovieEditView {
    return this._movieDetails;
  }


  private _form!: FormGroup<IMovieEditView>;
  public get form(): FormGroup<IMovieEditView> {
    return this._form;
  }

  public get nameControl(): FormControl<PropType<IMovieEditView, 'name'>> {
    return this._form.get('name') as unknown as FormControl<PropType<IMovieEditView, 'name'>>;
  }

  public get yearControl(): FormControl<PropType<IMovieEditView, 'year'>> {
    return this._form.get('year') as unknown as FormControl<PropType<IMovieEditView, 'year'>>;
  }

  public get descriptionControl(): FormControl<PropType<IMovieEditView, 'description'>> {
    return this._form.get('description') as unknown as FormControl<PropType<IMovieEditView, 'description'>>;
  }

  public get ratingControl(): FormControl<PropType<IMovieEditView, 'rating'>> {
    return this._form.get('rating') as unknown as FormControl<PropType<IMovieEditView, 'rating'>>;
  }

  public get genreControl(): FormControl<PropType<IMovieEditView, 'genre'>> {
    return this._form.get('genre') as unknown as FormControl<PropType<IMovieEditView, 'genre'>>;
  }

  public get isYearLessThenMinError(): boolean {
    console.log(this.yearControl.errors ? Boolean(this.yearControl.errors?.min) : false);
    return this.yearControl.errors ? Boolean(this.yearControl.errors?.min) : false;
  }

  public get isYearBiggerThenMaxError(): boolean {
    console.log(this.yearControl.errors ? Boolean(this.yearControl.errors?.max) : false);
    return this.yearControl.errors ? Boolean(this.yearControl.errors?.max) : false;
  }

  public get isRatingLessThenMinError(): boolean {
    console.log(this.ratingControl.errors ? Boolean(this.ratingControl.errors?.min) : false);
    return this.ratingControl.errors ? Boolean(this.ratingControl.errors?.min) : false;
  }

  public get isRatingMoreThenMaxError(): boolean {
    console.log(this.ratingControl.errors ? Boolean(this.ratingControl.errors?.max) : false);
    return this.ratingControl.errors ? Boolean(this.ratingControl.errors?.max) : false;
  }

  public constructor(private _route: ActivatedRoute,
    private _movieDetailsService: MovieDetailsService,
    private _reactiveFormsModule: FormBuilder) { }

  public updateMovieHandler(): void {
    if (this._form.valid) {
      this._movieDetailsService.updateMovie(this._movieDetails).pipe(take(ONE))
        .subscribe();
    }
  }

  public getMdbDashboardLink(): string {
    return `../../${MDB_DASHBOARD_PATH}`;
  }

  public ngOnInit(): void {
    this._movieDetails = this._route.snapshot.data.movieDetails;

    this._form = this._reactiveFormsModule.group<IMovieEditView>(
      {
        name: [this._movieDetails.name, Validators.required],
        year: [this._movieDetails.year, [Validators.required,
          Validators.min(MIN_YEAR),
          Validators.max(new Date().getFullYear())]],
        description: [this._movieDetails.description, Validators.required],
        rating: [this._movieDetails.rating, [Validators.required,
          Validators.min(ZERO),
          Validators.max(MAX_RATING)]],
        genre: [this._movieDetails.genre, Validators.required],
      },
    );

    this._form.valueChanges.subscribe(data => {
      if (this._form.valid) {
        this._movieDetails.name = data.name;
        this._movieDetails.year = data.year;
        this._movieDetails.description = data.description;
        this._movieDetails.rating = data.rating;
        this._movieDetails.genre = data.genre;
      }
    });
  }


}
