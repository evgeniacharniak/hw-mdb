import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MdbDataService } from 'src/app/shared/services/mdb-data.service';
import { MovieDetails } from './models/movie-details';
import { take } from 'rxjs/operators';
import { MDB_DASHBOARD_PATH } from '../mdb-dashboard';
import { IWatchList } from 'src/app/shared/watch-list/models/watch-list';
import { IMovieDetailsView } from './models/movie-details-view';
import { FormBuilder, FormControl, FormGroup } from '@ng-stack/forms';
import { Validators } from '@angular/forms';
import { PropType } from 'src/app/shared/models/prop-type';

@Component({
  selector: 'mf-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieDetailsComponent implements OnInit {

  private _form!: FormGroup<IMovieDetailsView>;
  public get form(): FormGroup<IMovieDetailsView> {
    return this._form;
  }

  private _movieDetailsView!: IMovieDetailsView;
  public get movieDetailsView(): IMovieDetailsView {
    return this._movieDetailsView;
  }

  public get idControl(): FormControl<PropType<IMovieDetailsView, 'id'>> {
    return this._form.get('id') as unknown as FormControl<PropType<IMovieDetailsView, 'id'>>;
  }

  public get nameControl(): FormControl<PropType<IMovieDetailsView, 'name'>> {
    return this._form.get('name') as unknown as FormControl<PropType<IMovieDetailsView, 'name'>>;
  }

  public get yearControl(): FormControl<PropType<IMovieDetailsView, 'year'>> {
    return this._form.get('year') as unknown as FormControl<PropType<IMovieDetailsView, 'year'>>;
  }

  public get descriptionControl(): FormControl<PropType<IMovieDetailsView, 'description'>> {
    return this._form.get('description') as unknown as FormControl<PropType<IMovieDetailsView, 'description'>>;
  }

  public get ratingControl(): FormControl<PropType<IMovieDetailsView, 'rating'>> {
    return this._form.get('rating') as unknown as FormControl<PropType<IMovieDetailsView, 'rating'>>;
  }

  public get genreControl(): FormControl<PropType<IMovieDetailsView, 'genre'>> {
    return this._form.get('genre') as unknown as FormControl<PropType<IMovieDetailsView, 'genre'>>;
  }

  public get isInWatchListControl(): FormControl<PropType<IMovieDetailsView, 'isInWatchList'>> {
    return this._form.get('isInWatchList') as unknown as FormControl<PropType<IMovieDetailsView, 'isInWatchList'>>;
  }

  public constructor(private _route: ActivatedRoute,
    private _mdbDataService: MdbDataService,
    private _changeDetectorRef: ChangeDetectorRef,
    private _reactiveFormsModule: FormBuilder) {  }


  ngOnInit(): void {
    this._movieDetailsView = this._route.snapshot.data.movieDetails;
    this._form = this._reactiveFormsModule.group<IMovieDetailsView>(
      {
        id: this._route.snapshot.data.movieDetails.id,
        name: [this._route.snapshot.data.movieDetails.id, Validators.required],
        year: [this._route.snapshot.data.movieDetails.year, [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]],
        description: [this._route.snapshot.data.movieDetails.description, Validators.required],
        rating: [this._route.snapshot.data.movieDetails.rating, [Validators.required, Validators.min(0), Validators.max(10)]],
        genre: [this._route.snapshot.data.movieDetails.genre, Validators.required],
        isInWatchList: this._route.snapshot.data.movieDetails.isInWatchList,
      }
    );
  }

  public updateMovieHandler(): void {
  }

  public getMdbDashboardLink(): string {
    return '../../' + MDB_DASHBOARD_PATH;
  }
}
