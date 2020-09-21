import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromReview from './review.reducer';

export interface ReviewState {
    review: fromReview.ReviewState
}

export const reducers: ActionReducerMap<ReviewState> = {
    review: fromReview.reducer,
};

export const getReviewState = createFeatureSelector<ReviewState>(
    'review'
);