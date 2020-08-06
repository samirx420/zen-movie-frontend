import { Injectable } from '@angular/core';

import { Effect, Actions, ofType, createEffect } from '@ngrx/effects';

import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as reviewActions from '../actions/review.actions';
import * as fromServices from '../../../@core/services';

import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable()
export class ReviewEffects {
    constructor(
        private actions$: Actions,
        private reviewService: fromServices.ReviewService,
        private message: NzMessageService,
    ) { }

    loadReviews$ = createEffect(() =>
        this.actions$.pipe(
            ofType(reviewActions.LOAD_REVIEW_BY_MOVIE),
            switchMap(({ movieId, payload }) => {
                return this.reviewService
                    .getReviews(movieId, payload)
                    .pipe(
                        map(movies => reviewActions.LoadReviewByMovieSuccess(movies)),
                        catchError(error => of(reviewActions.LoadReviewByMovieFail(error)))
                    )
            }
            )
        )
    );

    createReview$ = createEffect(() =>
        this.actions$.pipe(
            ofType(reviewActions.CREATE_REVIEW),
            switchMap(({ payload }) => {
                return this.reviewService
                    .createReview(payload)
                    .pipe(
                        map(movie => {
                            this.message.success('Movie created successfully.', { nzDuration: 3000 });
                            return reviewActions.CreateReviewSuccess({ payload: movie })
                        }),
                        catchError(error => of(reviewActions.CreateReviewFail(error)))
                    )
            })
        )
    );

    updateMovie$ = createEffect(() =>
        this.actions$.pipe(
            ofType(reviewActions.UPDATE_REVIEW),
            switchMap(({ payload }) => {
                return this.reviewService
                    .updateReview(payload)
                    .pipe(
                        map(() => {
                            this.message.success('Movie updated successfully.', { nzDuration: 3000 });
                            return reviewActions.UpdateReviewSuccess({ payload: payload })
                        }),
                        catchError(error => of(reviewActions.UpdateReviewFail(error)))
                    )
            })
        )
    );

}