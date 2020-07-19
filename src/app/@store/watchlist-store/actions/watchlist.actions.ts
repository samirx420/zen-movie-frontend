import { createAction, props } from '@ngrx/store';

// MODELS
import { ResponseWrapper }  from '../../../@core/models/response.model';
import { Movie } from '../../../@core/models/movie.model';

// load watchlist
export const LOAD_WATCHLIST          = '[Watchlist] Load Watchlist';
export const LOAD_WATCHLIST_SUCCESS  = '[Watchlist] Load Watchlist Success';
export const LOAD_WATCHLIST_FAIL     = '[Watchlist] Load Watchlist Fail';

export const LoadWatchlist = createAction(
    LOAD_WATCHLIST,
);

export const LoadWatchlistSuccess = createAction(
    LOAD_WATCHLIST_SUCCESS,
    props<ResponseWrapper<Movie>>()
);

export const LoadWatchlistFail = createAction(
    LOAD_WATCHLIST_FAIL,
    props<{payload: any}>()
);

// add to watchlist.
export const ADD_TO_WATCHLIST            = '[Watchlist] Add To Watchlist';
export const ADD_TO_WATCHLIST_SUCCESS    = '[Watchlist] Add To Watchlist Success';
export const ADD_TO_WATCHLIST_FAIL       = '[Watchlist] Add To Watchlist Fail';

export const AddToWatchlist = createAction(
    ADD_TO_WATCHLIST,
    props<{payload: Movie}>()
);

export const AddToWatchlistSuccess = createAction(
    ADD_TO_WATCHLIST_SUCCESS,
    props<{payload: Movie}>()
);

export const AddToWatchlistFail = createAction(
    ADD_TO_WATCHLIST_FAIL,
    props<{error: any}>()
);

// remove from watchlist
export const REMOVE_FROM_WATCHLIST            = '[Watchlist] Remove From Watchlist';
export const REMOVE_FROM_WATCHLIST_SUCCESS    = '[Watchlist] Remove From Watchlist Success';
export const REMOVE_FROM_WATCHLIST_FAIL       = '[Watchlist] Remove From Watchlist Fail';

export const RemoveFromWatchlist = createAction(
    REMOVE_FROM_WATCHLIST,
    props<{payload: Movie}>()
);

export const RemoveFromWatchlistSuccess = createAction(
    REMOVE_FROM_WATCHLIST_SUCCESS,
    props<{payload: Movie}>()
);

export const RemoveFromWatchlistFail = createAction(
    REMOVE_FROM_WATCHLIST_FAIL,
    props<{payload: any}>()
);
