import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromWatchlist from './watchlist.reducer';

export interface WatchlistState {
    watchlist: fromWatchlist.WatchlistState
}

export const reducers: ActionReducerMap<WatchlistState> = {
    watchlist: fromWatchlist.reducer,
};

export const getWatchlistState = createFeatureSelector<WatchlistState>(
    'watchlist'
);