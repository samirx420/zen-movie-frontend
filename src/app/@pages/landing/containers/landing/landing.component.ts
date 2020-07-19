import { Component, OnInit } from '@angular/core';

// RXJS
import { Observable } from 'rxjs';

// MODELS
import { paged } from 'src/app/@core/models/paged.model';
import { Movie } from 'src/app/@core/models/movie.model';

// STORES
import { Store } from '@ngrx/store';
import * as fromMovieStore from '../../../../@store/movie-store';
import * as fromWatchlistStore from '../../../../@store/watchlist-store';

@Component({
  selector   : 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls  : ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  movies$ : Movie[];
  paged$  : Observable<paged>;
  loading$: Observable<boolean>;

  model     : Movie = {};
  isEdit    : boolean;
  showDetail: boolean;

  paged: paged = {
    page    : 1,
    pageSize: 10
  }

  constructor(
    private movieStore: Store<fromMovieStore.MovieState>,
    private watchlistStore: Store<fromWatchlistStore.WatchlistState>,
  ) { }

  ngOnInit() {
    this.movieStore.dispatch(fromMovieStore.LoadMovie());

    // this.movies$  = 
    this.movieStore.select(fromMovieStore.getMovies).subscribe(x => this.movies$ = x);
    this.loading$ = this.movieStore.select(fromMovieStore.getMoviesLoading);
  }

  public showEditForm(model) {
    this.isEdit     = true;
    this.model      = model;
    this.showDetail = true;
  }

  public showAddForm() {
    this.isEdit     = false;
    this.showDetail = true;
  }

  onCreate(event) {
    event = {...event, id: this.movies$.length + 1}
    this.movieStore.dispatch(fromMovieStore.CreateMovieSuccess({ payload: event }));
  }

  onUpdate(event: Movie) {
    this.movieStore.dispatch(fromMovieStore.UpdateMovieSuccess({ payload: event }));
  }

  addToWatchList(event: Movie){
    this.watchlistStore.dispatch(fromWatchlistStore.AddToWatchlistSuccess({ payload: event }));
    event = {...event, is_in_watchlist: true};
    this.movieStore.dispatch(fromMovieStore.UpdateMovieSuccess({ payload: event }));
  }
  
  removeFromWatchList(event: Movie){
    this.watchlistStore.dispatch(fromWatchlistStore.RemoveFromWatchlistSuccess({ payload: event }));
    event = {...event, is_in_watchlist: false};
    this.movieStore.dispatch(fromMovieStore.UpdateMovieSuccess({ payload: event }));
  }

  changePage(page: number) {
    this.paged = { ...this.paged, page };
    // this.teacherStore.dispatch(new fromTeacherStore.LoadTeacher({ paged: this.paged }));
  }

  hideDetail() {
    this.showDetail = false;
  }
}
