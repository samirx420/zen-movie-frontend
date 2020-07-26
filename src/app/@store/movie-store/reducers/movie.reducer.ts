import * as fromMovie from '../actions';
import { createReducer, on, Action } from '@ngrx/store';

import { Movie } from '../../../@core/models/movie.model';
import { Paged } from '../../../@core/models/paged.model';

export interface MovieState {
    entities : { [id: number]: Movie };
    watchlist: { [id: number]: Movie };
    entity   : Movie,
    paged    : Paged,
    loading  : boolean;
    loaded   : boolean;
}

export const initialState: MovieState = {
    entities : {},
    watchlist: {},
    entity   : {},
    paged    : {},
    loading  : false,
    loaded   : false,
};

const movieReducer = createReducer(
    initialState,
    on(fromMovie.LoadMovie, state => ({ ...state, loading: true })),
    on(fromMovie.LoadMovieSuccess, (state, payload) => {
        const entities = payload.data.reduce(
            (entities: { [id: number]: Movie }, movie: Movie) => {
                return {
                    ...entities,
                    [movie.id]: movie,
                };
            },
            {}
        );

        const paged = payload.paged;

        return {
            ...state,
            loading: false,
            loaded : true,
            paged  : paged,
            entities,
        };
    }),
    on(fromMovie.LoadMovieFail, state => ({ ...state, loading: false, loaded: false, })),
    on(fromMovie.LoadMovieDetailSuccess, (state, payload) => {
        const entity = payload;

        return {
            ...state,
            loading: false,
            loaded : true,
            entity,
        };
    }),
    on(fromMovie.CreateMovieSuccess, (state, { payload }) => {
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
    on(fromMovie.UpdateMovieSuccess, (state, { payload }) => {

        const entities = {
            ...state.entities,
            [payload.id]: payload
        };

        return {
            ...state,
            entities
        }
    }),
    on(fromMovie.LoadWatchlistSuccess, (state, payload) => {
        const watchlist = payload.data.reduce(
            (watchlist: { [id: number]: Movie }, movie: Movie) => {
                return {
                    ...watchlist,
                    [movie.id]: movie,
                };
            },
            {}
        );

        return {
            ...state,
            loading: false,
            loaded : true,
            watchlist,
        };
    }),
    on(fromMovie.AddToWatchlistSuccess, (state, { payload }) => {

        // const entities = {
        //     ...state.entities,
        //     [payload.id]: { ...payload, is_in_watchlist: true }
        // };

        const entity = { ...state.entity, is_in_watchlist: true }

        return {
            ...state,
            // entities,
            entity
        }
    }),
    on(fromMovie.RemoveFromWatchlist, (state, { payload }) => {

        const entities = {
            ...state.entities,
            [payload.id]: { ...payload, is_in_watchlist: false }
        };

        const entity = { ...state.entity, is_in_watchlist: false }

        const { [payload.id]: removed, ...watchlist } = state.watchlist;

        return {
            ...state,
            entities,
            entity,
            watchlist
        }
    })
);

export function reducer(state: MovieState | undefined, action: Action) {
    return movieReducer(state, action);
}

export const getMovieEntities  = (state: MovieState) => state.entities;
export const getMovieEntitiy   = (state: MovieState) => state.entity;
export const getMoviePaged     = (state: MovieState) => state.paged;
export const getMovieWatchlist = (state: MovieState) => state.watchlist;
export const getMovieLoading   = (state: MovieState) => state.loading;
export const getMovieLoaded    = (state: MovieState) => state.loaded;