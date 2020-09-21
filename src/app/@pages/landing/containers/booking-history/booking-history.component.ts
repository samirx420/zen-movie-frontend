import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/@core/services';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.scss']
})
export class BookingHistoryComponent implements OnInit {

  history: any[];
  constructor(
    private bookingService: BookingService,
  ) { }

  ngOnInit() {
    this.getBookingHistor();
  }

  getBookingHistor() {
    this.bookingService.getMyBookingHistory().subscribe(data => {
      this.history = data.data
    })
  }

}
