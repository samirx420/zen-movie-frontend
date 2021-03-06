import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// RXJS
import { Observable } from 'rxjs';

// MODELS
import { Movie } from 'src/app/@core/models/movie.model';
import { Paged } from 'src/app/@core/models/paged.model';

// services
import { AuthService } from 'src/app/@core/services';

// STORES
import { Store } from '@ngrx/store';
import * as fromMovieStore from '../../../../@store/movie-store';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

  movies$ : Observable<Movie[]>;
  paged$  : Observable<Paged>;
  loading$: Observable<boolean>;
  user$   : any;

  paged: Paged = {
    page    : 1,
    pageSize: 10
  }

  constructor(
    private movieStore: Store<fromMovieStore.MovieState>,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.user$ = this.authService.currentUserValue;

    this.movieStore.dispatch(fromMovieStore.LoadWatchlist());

    // this.movies$  = 
    this.movies$ = this.movieStore.select(fromMovieStore.getWatchlist);
    this.loading$ = this.movieStore.select(fromMovieStore.getMoviesLoading);
  }

  addToWatchList(event: Movie){
    if(!this.user$){
      this.router.navigate(['/login']);
      return;
    }
    this.movieStore.dispatch(fromMovieStore.AddToWatchlist({ payload: event }));
  }
  
  removeFromWatchList(event: Movie){
    this.movieStore.dispatch(fromMovieStore.RemoveFromWatchlist({ payload: event }));
  }

  changePage(page: number) {
    this.paged = { ...this.paged, page };
  }

  
  
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }


}
