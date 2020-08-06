import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

// MODELS

import { Movie } from 'src/app/@core/models/movie.model';
// STORES
import { Store } from '@ngrx/store';
import * as fromMovieStore from '../../../../@store/movie-store';
import * as fromReviewStore from '../../../../@store/review-store';

// SERVICES
import { AuthService } from 'src/app/@core/services';
import { Paged } from 'src/app/@core/models/paged.model';
import { Review } from 'src/app/@core/models/review.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id: number;
  user$   : any;
  
  review: string;
  
  movie$: Observable<Movie> ;
  reviews$: Observable<Review[]> ;
  
  paged: Paged = {
    page    : 1,
    pageSize: 10
  }

  constructor(
    private route: ActivatedRoute,
    private movieStore: Store<fromMovieStore.MovieState>,
    private reviewStore: Store<fromReviewStore.ReviewState>,
    private authService: AuthService,
    private router: Router,
    ) { }

  ngOnInit() {
    // DISPATCHERS
    this.user$ = this.authService.currentUserValue;
    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.movieStore.dispatch(fromMovieStore.LoadMovieDetail({movieId: this.id}));
      this.reviewStore.dispatch(fromReviewStore.LoadReviewByMovie({movieId: this.id, payload: this.paged}));
    });

    // SELECTORS
    this.movie$ = this.movieStore.select(fromMovieStore.getMovie);
    this.reviews$ = this.reviewStore.select(fromReviewStore.getReviews);
  }

  
  addToWatchList(event: Movie){
    console.log('asdf')
    if(!this.user$){
      this.router.navigate(['/login']);
      return;
    }
    this.movieStore.dispatch(fromMovieStore.AddToWatchlist({ payload: event }));
  }
  
  removeFromWatchList(event: Movie){
    this.movieStore.dispatch(fromMovieStore.RemoveFromWatchlist({ payload: event }));
  }

  postReview(){
    let payload_review = {
      movie_id: this.id,
      review: this.review
    }
    console.log(payload_review);
    this.reviewStore.dispatch(fromReviewStore.CreateReview({ payload: payload_review }));
    this.review = '';
  }

}
