import { createAction, props } from '@ngrx/store';

// MODELS
import { ResponseWrapper }  from '../../../@core/models/response.model';
import { Movie } from '../../../@core/models/movie.model';

// load movie
export const LOAD_MOVIE          = '[Movie] Load Movie';
export const LOAD_MOVIE_SUCCESS  = '[Movie] Load Movie Success';
export const LOAD_MOVIE_FAIL     = '[Movie] Load Movie Fail';

export const LoadMovie = createAction(
    LOAD_MOVIE,
);

export const LoadMovieSuccess = createAction(
    LOAD_MOVIE_SUCCESS,
    props<ResponseWrapper<Movie>>()
);

export const LoadMovieFail = createAction(
    LOAD_MOVIE_FAIL,
    props<{payload: any}>()
);

// create movie.
export const CREATE_MOVIE            = '[Movie] Create Movie';
export const CREATE_MOVIE_SUCCESS    = '[Movie] Create Movie Success';
export const CREATE_MOVIE_FAIL       = '[Movie] Create Movie Fail';

export const CreateMovie = createAction(
    CREATE_MOVIE,
    props<{payload: Movie}>()
);

export const CreateMovieSuccess = createAction(
    CREATE_MOVIE_SUCCESS,
    props<{payload: Movie}>()
);

export const CreateMovieFail = createAction(
    CREATE_MOVIE_FAIL,
    props<{error: any}>()
);

// update movie
export const UPDATE_MOVIE            = '[Movie] Update Movie';
export const UPDATE_MOVIE_SUCCESS    = '[Movie] Update Movie Success';
export const UPDATE_MOVIE_FAIL       = '[Movie] Update Movie Fail';

export const UpdateMovie = createAction(
    UPDATE_MOVIE,
    props<{payload: Movie}>()
);

export const UpdateMovieSuccess = createAction(
    UPDATE_MOVIE_SUCCESS,
    props<{payload: Movie}>()
);

export const UpdateMovieFail = createAction(
    UPDATE_MOVIE_FAIL,
    props<{payload: any}>()
);

// add to watchlist.
export const MOVIE_ADD_TO_WATCHLIST            = '[Movie] Add To Watchlist';
export const MOVIE_ADD_TO_WATCHLIST_SUCCESS    = '[Movie] Add To Watchlist Success';
export const MOVIE_ADD_TO_WATCHLIST_FAIL       = '[Movie] Add To Watchlist Fail';

export const AddToWatchlist = createAction(
    MOVIE_ADD_TO_WATCHLIST,
    props<{payload: Movie}>()
);

export const AddToWatchlistSuccess = createAction(
    MOVIE_ADD_TO_WATCHLIST_SUCCESS,
    props<{payload: Movie}>()
);

export const AddToWatchlistFail = createAction(
    MOVIE_ADD_TO_WATCHLIST_FAIL,
    props<{error: any}>()
);


// remove from watchlist
export const MOVIE_REMOVE_FROM_WATCHLIST            = '[Movie] Remove From Watchlist';
export const MOVIE_REMOVE_FROM_WATCHLIST_SUCCESS    = '[Movie] Remove From Watchlist Success';
export const MOVIE_REMOVE_FROM_WATCHLIST_FAIL       = '[Movie] Remove From Watchlist Fail';

export const RemoveFromWatchlist = createAction(
    MOVIE_REMOVE_FROM_WATCHLIST,
    props<{payload: Movie}>()
);

export const RemoveFromWatchlistSuccess = createAction(
    MOVIE_REMOVE_FROM_WATCHLIST_SUCCESS,
    props<{payload: Movie}>()
);

export const RemoveFromWatchlistFail = createAction(
    MOVIE_REMOVE_FROM_WATCHLIST_FAIL,
    props<{payload: any}>()
);
