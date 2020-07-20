import { LandingComponent } from "./landing/landing.component";
import { DetailComponent } from "./detail/detail.component";
import { WatchlistComponent } from "./watchlist/watchlist.component";

export const containers: any[] = [
    LandingComponent,
    DetailComponent,
    WatchlistComponent
];

export * from './landing/landing.component';
export * from './detail/detail.component';
export * from './watchlist/watchlist.component';