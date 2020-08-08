import { AuthService } from "./auth.service";
import { MovieService } from "./movie.service";
import { WatchlistService } from "./watchlist.service";
import { ReviewService } from "./review.service";
import { BookingService } from "./booking.service";

export const services: any[]=[
    AuthService,
    MovieService,
    WatchlistService,
    ReviewService,
    BookingService
];

export * from './auth.service';
export * from './movie.service';
export * from './watchlist.service';
export * from './review.service';
export * from './booking.service';