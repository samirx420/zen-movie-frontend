import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromReview from '../reducers/review.reducer';

export const getReviewsState = createSelector(
    fromFeature.getReviewState,
    (state: fromFeature.ReviewState) => state.review
);

export const getReviewsEntities = createSelector(
    getReviewsState,
    fromReview.getReviewEntities
);

export const getReviews = createSelector(
    getReviewsEntities,
    entities => {
        return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
    }
);

export const getReviewsPaged = createSelector(
    getReviewsState,
    fromReview.getReviewPaged
);

export const getReviewsLoaded = createSelector(
    getReviewsState,
    fromReview.getReviewLoaded
);

export const getReviewsLoading = createSelector(
    getReviewsState,
    fromReview.getReviewLoading
);