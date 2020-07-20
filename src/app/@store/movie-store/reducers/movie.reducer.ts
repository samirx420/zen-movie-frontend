import * as fromMovie from '../actions';
import { createReducer, on, Action } from '@ngrx/store';

import { Movie } from '../../../@core/models/movie.model';

export interface MovieState {
    entities: { [id: number]: Movie };
    entity  : Movie,
    loading : boolean;
    loaded  : boolean;
}

export const initialState: MovieState = {
    entities: {},
    entity  : {},
    loading : false,
    loaded  : false,
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

        return {
            ...state,
            loading: false,
            loaded : true,
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
    on(fromMovie.AddToWatchlistSuccess, (state, { payload }) => {

        const entities = {
            ...state.entities,
            [payload.id]: { ...payload, is_in_watchlist: true }
        };

        return {
            ...state,
            entities
        }
    }),
    on(fromMovie.RemoveFromWatchlist, (state, { payload }) => {

        const entities = {
            ...state.entities,
            [payload.id]: { ...payload, is_in_watchlist: false }
        };

        return {
            ...state,
            entities
        }
    })
);

export function reducer(state: MovieState | undefined, action: Action) {
    return movieReducer(state, action);
}

export const getMovieEntities = (state: MovieState) => state.entities;
export const getMovieEntitiy  = (state: MovieState) => state.entity;
export const getMovieLoading  = (state: MovieState) => state.loading;
export const getMovieLoaded   = (state: MovieState) => state.loaded;