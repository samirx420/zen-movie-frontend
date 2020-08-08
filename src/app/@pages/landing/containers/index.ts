import { LandingComponent }     from "./landing/landing.component";
import { DetailComponent }      from "./detail/detail.component";
import { WatchlistComponent }   from "./watchlist/watchlist.component";
import { BookingComponent }     from "./booking/booking.component";

export const containers: any[] = [
    LandingComponent
    , DetailComponent
    , WatchlistComponent
    , BookingComponent
];

export * from './landing/landing.component';
export * from './detail/detail.component';
export * from './watchlist/watchlist.component';
export * from './booking/booking.component';