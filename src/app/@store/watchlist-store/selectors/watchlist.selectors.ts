import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromWatchlist from '../reducers/watchlist.reducer';

export const geWatchlistsState = createSelector(
    fromFeature.getWatchlistState,
    (state: fromFeature.WatchlistState) => state.watchlist
);

export const getWatchlistsEntities = createSelector(
    geWatchlistsState,
    fromWatchlist.getWatchlistEntities
);

export const getWatchlists = createSelector(
    getWatchlistsEntities,
    entities => {
        return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
    }
);

export const getWatchlistsLoaded = createSelector(
    geWatchlistsState,
    fromWatchlist.getWatchlistLoaded
);

export const getWatchlistsLoading = createSelector(
    geWatchlistsState,
    fromWatchlist.getWatchlistLoading
);