import { Injectable } from '@angular/core';

import { Effect, Actions, ofType, createEffect } from '@ngrx/effects';

import { of }                           from 'rxjs';
import { map, switchMap, catchError }   from 'rxjs/operators';

import * as movieActions   from '../actions/movie.actions';
import * as fromServices    from '../../../@core/services';
import { dispatch } from 'rxjs/internal/observable/pairs';

@Injectable()
export class MovieEffects {
    constructor(
        private actions$      : Actions,
        private movieService: fromServices.MovieService,
        private watchlistService: fromServices.WatchlistService,
    ) { }

    loadMovies$ = createEffect(() =>
        this.actions$.pipe(
            ofType(movieActions.LOAD_MOVIE),
            switchMap(() => {
                return this.movieService
                    .getMovies()
                    .pipe(
                        map(movies => movieActions.LoadMovieSuccess(movies)),
                        catchError(error => of(movieActions.LoadMovieFail(error)))
                    )
            }
            )
        )
    );
    
    loadMovieDetail$ = createEffect(() =>
        this.actions$.pipe(
            ofType(movieActions.LOAD_MOVIE_DETAIL),
            switchMap(({ movieId }) => {
                console.log('payload', movieId)
                return this.movieService
                    .getMovieDetail(movieId)
                    .pipe(
                        map(movie => movieActions.LoadMovieDetailSuccess(movie)),
                        catchError(error => of(movieActions.LoadMovieDetailFail(error)))
                    )
            }
            )
        )
    );

    createMovie$ = createEffect(() =>
        this.actions$.pipe(
            ofType(movieActions.CREATE_MOVIE),
            switchMap(({payload}) => {
                return this.movieService
                    .createMovie(payload)
                    .pipe(
                        map(movie => movieActions.CreateMovieSuccess({payload: movie})),
                        catchError(error => of(movieActions.CreateMovieFail(error)))
                    )
            })
        )
    );

    @Effect()
    updatMovie$ = createEffect(() =>
        this.actions$.pipe(
            ofType(movieActions.UPDATE_MOVIE),
            switchMap(({ payload }) => {
                return this.movieService
                    .updateMovie(payload)
                    .pipe(
                        map(() => movieActions.UpdateMovieSuccess({payload: payload})),
                        catchError(error => of(movieActions.UpdateMovieFail(error)))
                    )
            })
        )
    );

    addToWatchlist$ = createEffect(() =>
        this.actions$.pipe(
            ofType(movieActions.MOVIE_ADD_TO_WATCHLIST),
            switchMap(({payload}) => {
                return this.watchlistService
                    .addToWatchlist(payload)
                    .pipe(
                        map(movie => {
                            return movieActions.AddToWatchlistSuccess({payload});
                        }),
                        catchError(error => of(movieActions.AddToWatchlistFail(error)))
                    )
            })
        )
    );

    removeFromWatchlist$ = createEffect(() =>
        this.actions$.pipe(
            ofType(movieActions.MOVIE_REMOVE_FROM_WATCHLIST),
            switchMap(({ payload }) => {
                return this.watchlistService
                    .removeFromWatchlist(payload)
                    .pipe(
                        map(() => movieActions.RemoveFromWatchlistSuccess({payload: payload})),
                        catchError(error => of(movieActions.RemoveFromWatchlistFail(error)))
                    )
            })
        )
    );
   
    
}