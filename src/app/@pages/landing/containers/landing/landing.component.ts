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
import { AuthService } from 'src/app/@core/services';
import { Router } from '@angular/router';

@Component({
  selector   : 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls  : ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  movies$ : Movie[];
  paged$  : Observable<paged>;
  loading$: Observable<boolean>;
  user$   : any;

  paged: paged = {
    page    : 1,
    pageSize: 10
  }

  constructor(
    private movieStore: Store<fromMovieStore.MovieState>,
    private watchlistStore: Store<fromWatchlistStore.WatchlistState>,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.user$ = this.authService.currentUserValue;

    this.movieStore.dispatch(fromMovieStore.LoadMovie());

    // this.movies$  = 
    this.movieStore.select(fromMovieStore.getMovies).subscribe(x => this.movies$ = x);
    this.loading$ = this.movieStore.select(fromMovieStore.getMoviesLoading);
  }

  addToWatchList(event: Movie){
    if(!this.user$){
      this.router.navigate(['/login']);
      return;
    }
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


}
