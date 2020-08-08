import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

// SERVICES
import { AuthService } from 'src/app/@core/services';
import { BookingService } from 'src/app/@core/services';

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

  rows = [1, 2];
  cols = [1, 2];

  selectedRow: any;
  selectedCol: any;


  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private bookingService: BookingService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
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
