import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// STORES
import { Store } from '@ngrx/store';
import * as fromMovieStore from '../../../../@store/movie-store';
import { Movie } from 'src/app/@core/models/movie.model';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/@core/services';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id: number;
  user$   : any;

  movie$: Observable<Movie> ;

  constructor(
    private route: ActivatedRoute,
    private movieStore: Store<fromMovieStore.MovieState>,
    private authService: AuthService,
    private router: Router,
    ) { }

  ngOnInit() {
    // DISPATCHERS
    this.user$ = this.authService.currentUserValue;
    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
      this.movieStore.dispatch(fromMovieStore.LoadMovieDetail({movieId: this.id}));
    });

    // SELECTORS
    this.movie$ = this.movieStore.select(fromMovieStore.getMovie);
  }

  
  addToWatchList(event: Movie){
    console.log('asdf')
    if(!this.user$){
      this.router.navigate(['/login']);
      return;
    }
    this.movieStore.dispatch(fromMovieStore.AddToWatchlist({ payload: event }));
    // event = {...event, is_in_watchlist: true};
    // this.movieStore.dispatch(fromMovieStore.UpdateMovieSuccess({ payload: event }));
  }
  
  removeFromWatchList(event: Movie){
    this.movieStore.dispatch(fromMovieStore.RemoveFromWatchlist({ payload: event }));
    // event = {...event, is_in_watchlist: false};
    // this.movieStore.dispatch(fromMovieStore.UpdateMovieSuccess({ payload: event }));
  }

}
