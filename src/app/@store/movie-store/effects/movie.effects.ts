import { Injectable } from '@angular/core';

import { Effect, Actions, ofType, createEffect } from '@ngrx/effects';

import { of }                           from 'rxjs';
import { map, switchMap, catchError }   from 'rxjs/operators';

import * as movieActions   from '../actions/movie.actions';
import * as fromServices    from '../../../@core/services';

@Injectable()
export class MovieEffects {
    constructor(
        private actions$      : Actions,
        private movieService: fromServices.MovieService
    ) { }

    @Effect()
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

    @Effect()
    createService$ = createEffect(() =>
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
    
}