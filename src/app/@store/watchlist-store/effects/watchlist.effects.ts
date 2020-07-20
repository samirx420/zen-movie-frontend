import { Injectable } from '@angular/core';

import { Effect, Actions, ofType, createEffect } from '@ngrx/effects';

import { of }                           from 'rxjs';
import { map, switchMap, catchError }   from 'rxjs/operators';

import * as watchlistActions   from '../actions/watchlist.actions';
// import * as movieActions   from '../../movie-store/actions/movie.actions';
import * as fromServices    from '../../../@core/services';

@Injectable()
export class WatchlistEffects {
    constructor(
        private actions$      : Actions,
        private watchlistService: fromServices.WatchlistService
    ) { }

    @Effect()
    loadWatchlist$ = createEffect(() =>
        this.actions$.pipe(
            ofType(watchlistActions.LOAD_WATCHLIST),
            switchMap(() => {
                return this.watchlistService
                    .getWatchlists()
                    .pipe(
                        map(movies => watchlistActions.LoadWatchlistSuccess(movies)),
                        catchError(error => of(watchlistActions.LoadWatchlistFail(error)))
                    )
            }
            )
        )
    );

    // @Effect()
    addToWatchlist$ = createEffect(() =>
        this.actions$.pipe(
            ofType(watchlistActions.ADD_TO_WATCHLIST),
            switchMap(({payload}) => {
                return this.watchlistService
                    .addToWatchlist(payload)
                    .pipe(
                        map(movie => {
                            // let data = {...event, is_in_watchlist: true};
                            // movieActions.UpdateMovieSuccess({payload: movie})
                            return watchlistActions.AddToWatchlistSuccess({payload: movie});
                        }),
                        catchError(error => of(watchlistActions.AddToWatchlistFail(error)))
                    )
            })
        )
    );

    // @Effect()
    removeFromWatchlist$ = createEffect(() =>
        this.actions$.pipe(
            ofType(watchlistActions.REMOVE_FROM_WATCHLIST),
            switchMap(({ payload }) => {
                return this.watchlistService
                    .removeFromWatchlist(payload)
                    .pipe(
                        map(() => watchlistActions.RemoveFromWatchlistSuccess({payload: payload})),
                        catchError(error => of(watchlistActions.RemoveFromWatchlistFail(error)))
                    )
            })
        )
    );
    
}