import { AuthService } from "./auth.service";
import { MovieService } from "./movie.service";
import { WatchlistService } from "./watchlist.service";
import { ReviewService } from "./review.service";

export const services: any[]=[
    AuthService,
    MovieService,
    WatchlistService,
    ReviewService,
];

export * from './auth.service';
export * from './movie.service';
export * from './watchlist.service';
export * from './review.service';