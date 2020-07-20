import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// STORES
import { Store } from '@ngrx/store';
import * as fromMovieStore from '../../../../@store/movie-store';
import { Movie } from 'src/app/@core/models/movie.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id: number;

  movie$: Observable<Movie> ;

  constructor(
    private route: ActivatedRoute,
    private movieStore: Store<fromMovieStore.MovieState>,
    ) { }

  ngOnInit() {
    // DISPATCHERS
    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
      this.movieStore.dispatch(fromMovieStore.LoadMovieDetail({movieId: this.id}));
    });

    // SELECTORS
    this.movie$ = this.movieStore.select(fromMovieStore.getMovie);
  }

}
