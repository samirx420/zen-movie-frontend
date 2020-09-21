import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

// MODELS
import { Movie } from 'src/app/@core/models/movie.model';

// SERVICES
import { AuthService } from 'src/app/@core/services';
import { BookingService } from 'src/app/@core/services';
import { NzMessageService } from 'ng-zorro-antd/message';

// STORES
import { Store } from '@ngrx/store';
import * as fromMovieStore from '../../../../@store/movie-store';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  id: number;
  booking_date: any;
  show_time: any;
  booked_seats: any[] = [];

  
  movie$: Observable<Movie> ;

  rows = [1, 2, 3, 4, 5, 6, 7, 8];
  cols = [1, 2, 3, 4, 5];

  selectedRow: any;
  selectedCol: any;


  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private bookingService: BookingService,
    private movieStore : Store<fromMovieStore.MovieState>,
    private message: NzMessageService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.movieStore.dispatch(fromMovieStore.LoadMovieDetail({movieId: this.id}));
    });

     // SELECTORS
     this.movie$ = this.movieStore.select(fromMovieStore.getMovie);
  }

  onSeatSelect(row, col) {
    this.selectedRow = row;
    this.selectedCol = col;
  }

  getBookedSeats() {
    if (this.booking_date && this.show_time) {
      let payload = {
        booking_date: this.booking_date,
        show_time: this.show_time,
        movie_id: this.id,
      }
      this.bookingService.getBookedSeats(payload).subscribe(data => {
        this.booked_seats = data.data
      })
    }
  }

  onBookingClick() {
    if (this.checkBooked(this.selectedRow, this.selectedCol)) {
      this.message.success('Seat booked already.', { nzDuration: 3000 });
      return;
    }
    if (this.booking_date) {
      let payload = {
        booking_date: this.booking_date,
        show_time: this.show_time,
        movie_id: this.id,
        seat_row: this.selectedRow,
        seat_column: this.selectedCol,
      }
      this.bookingService.book(payload).subscribe(data => {
        let payload_formatted = {
          seat_row: this.selectedRow,
          seat_column: this.selectedCol,
        }
        this.booked_seats.push(payload_formatted)
        this.message.success('Booking success.', { nzDuration: 3000 });
        console.log(payload);
      })
    }
  }

  checkBooked(row, col) {
    let found_booked_index = this.booked_seats.findIndex(i => i.seat_row === row && i.seat_column === col);
    console.log(found_booked_index)
    return found_booked_index === -1 ? false : true;
  }

}
