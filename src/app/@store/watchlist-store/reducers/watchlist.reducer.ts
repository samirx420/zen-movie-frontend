import * as fromWatchlist from '../actions';
import { createReducer, on, Action } from '@ngrx/store';

import { Movie } from '../../../@core/models/movie.model';

export interface WatchlistState {
    entities: { [id: number]: Movie };
    loading : boolean;
    loaded  : boolean;
}

export const initialState: WatchlistState = {
    entities: {},
    loading: false,
    loaded : false,
};

const watchlistReducer = createReducer(
    initialState,
    on(fromWatchlist.LoadWatchlist, state => ({ ...state, loading: true })),
    on(fromWatchlist.LoadWatchlistSuccess, (state, payload) => {
        const entities = payload.data.reduce(
            (entities: { [id: number]: Movie }, movie: Movie) => {
                return {
                    ...entities,
                    [movie.id]: movie,
                };
            },
            {}
        );

        return {
            ...state,
            loading: false,
            loaded : true,
            entities,
        };
    }),
    on(fromWatchlist.LoadWatchlistFail, state => ({ ...state, loading: false, loaded: false, })),
    on(fromWatchlist.AddToWatchlistSuccess, (state, { payload }) => {
        console.log(payload);
        const entities = {
            ...state.entities,
            [payload.id]: payload,
        };

        return {
            ...state,
            entities,
        };
    }),
    on(fromWatchlist.RemoveFromWatchlistSuccess, (state, { payload }) => {

        const { [payload.id]: removed, ...entities } = state.entities;
  
        return {
          ...state,
          entities,
        };
        
    }),
);

export function reducer(state: WatchlistState | undefined, action: Action) {
    return watchlistReducer(state, action);
}

export const getWatchlistEntities = (state: WatchlistState) => state.entities;
export const getWatchlistLoading  = (state: WatchlistState) => state.loading;
export const getWatchlistLoaded   = (state: WatchlistState) => state.loaded;