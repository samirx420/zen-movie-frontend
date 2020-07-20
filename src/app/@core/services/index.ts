import { AuthService } from "./auth.service";
import { MovieService } from "./movie.service";
import { WatchlistService } from "./watchlist.service";

export const services: any[]=[
    AuthService,
    MovieService,
    WatchlistService
];

export * from './auth.service';
export * from './movie.service';
export * from './watchlist.service';