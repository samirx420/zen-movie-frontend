import { Injectable } from '@angular/core';

import { Effect, Actions, ofType, createEffect } from '@ngrx/effects';

import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as movieActions from '../actions/movie.actions';
import * as fromServices from '../../../@core/services';

import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable()
export class MovieEffects {
    constructor(
        private actions$: Actions,
        private movieService: fromServices.MovieService,
        private watchlistService: fromServices.WatchlistService,
        private message: NzMessageService,
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
            switchMap(({ payload }) => {
                return this.movieService
                    .createMovie(payload)
                    .pipe(
                        map(movie => {
                            this.message.success('Movie created successfully.', { nzDuration: 3000 });
                            return movieActions.CreateMovieSuccess({ payload: movie })
                        }),
                        catchError(error => of(movieActions.CreateMovieFail(error)))
                    )
            })
        )
    );

    updateMovie$ = createEffect(() =>
        this.actions$.pipe(
            ofType(movieActions.UPDATE_MOVIE),
            switchMap(({ payload }) => {
                return this.movieService
                    .updateMovie(payload)
                    .pipe(
                        map(() => {
                            this.message.success('Movie updated successfully.', { nzDuration: 3000 });
                            return movieActions.UpdateMovieSuccess({ payload: payload })
                        }),
                        catchError(error => of(movieActions.UpdateMovieFail(error)))
                    )
            })
        )
    );

    loadWatchlist$ = createEffect(() =>
        this.actions$.pipe(
            ofType(movieActions.MOVIE_LOAD_WATCHLIST),
            switchMap(() => {
                return this.watchlistService
                    .getWatchlists()
                    .pipe(
                        map(movies => movieActions.LoadWatchlistSuccess(movies)),
                        catchError(error => of(movieActions.LoadWatchlistFail(error)))
                    )
            }
            )
        )
    );

    addToWatchlist$ = createEffect(() =>
        this.actions$.pipe(
            ofType(movieActions.MOVIE_ADD_TO_WATCHLIST),
            switchMap(({ payload }) => {
                return this.watchlistService
                    .addToWatchlist(payload)
                    .pipe(
                        map(movie => {
                            this.message.success('Added to watchlist.', { nzDuration: 3000 });
                            return movieActions.AddToWatchlistSuccess({ payload });
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
                        map(() => {
                            this.message.success('Removed from watchlist.', { nzDuration: 3000 });
                            return movieActions.RemoveFromWatchlistSuccess({ payload: payload })
                    }),
                        catchError(error => of(movieActions.RemoveFromWatchlistFail(error)))
                    )
            })
        )
    );


}