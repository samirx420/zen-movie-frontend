import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/@core/models/movie.model';

@Component({
  selector: 'admin-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input() movie:Movie;

  @Output() addToWatchlist = new EventEmitter<Movie>();
  @Output() removeFromWatchList = new EventEmitter<Movie>();
  @Output() editClick = new EventEmitter<Movie>();

  constructor() { }

  ngOnInit() {
  }
  
  _addToWatchlist(movie: Movie) {
    this.addToWatchlist.emit(movie);
  }
  _removeFromWatchList(movie: Movie) {
    this.removeFromWatchList.emit(movie);
  }

  _editClick(movie: Movie){
    this.editClick.emit(movie);
  }
}
