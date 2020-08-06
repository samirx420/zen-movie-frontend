import { createAction, props } from '@ngrx/store';

// MODELS
import { ResponseWrapper }  from '../../../@core/models/response.model';
import { Review }           from '../../../@core/models/review.model';
import { Paged }            from '../../../@core/models/paged.model';

// load review by movie
export const LOAD_REVIEW_BY_MOVIE          = '[Review] Load Review';
export const LOAD_REVIEW_BY_MOVIE_SUCCESS  = '[Review] Load Review Success';
export const LOAD_REVIEW_BY_MOVIE_FAIL     = '[Review] Load Review Fail';

export const LoadReviewByMovie = createAction(
    LOAD_REVIEW_BY_MOVIE,
    props<{movieId: number, payload:Paged}>()
);

export const LoadReviewByMovieSuccess = createAction(
    LOAD_REVIEW_BY_MOVIE_SUCCESS,
    props<ResponseWrapper<Review>>()
);

export const LoadReviewByMovieFail = createAction(
    LOAD_REVIEW_BY_MOVIE_FAIL,
    props<{payload: any}>()
);

// create review.
export const CREATE_REVIEW            = '[Review] Create Review';
export const CREATE_REVIEW_SUCCESS    = '[Review] Create Review Success';
export const CREATE_REVIEW_FAIL       = '[Review] Create Review Fail';

export const CreateReview = createAction(
    CREATE_REVIEW,
    props<{payload: Review }>()
);

export const CreateReviewSuccess = createAction(
    CREATE_REVIEW_SUCCESS,
    props<{payload: Review}>()
);

export const CreateReviewFail = createAction(
    CREATE_REVIEW_FAIL,
    props<{error: any}>()
);

// update review
export const UPDATE_REVIEW            = '[Review] Update Review';
export const UPDATE_REVIEW_SUCCESS    = '[Review] Update Review Success';
export const UPDATE_REVIEW_FAIL       = '[Review] Update Review Fail';

export const UpdateReview = createAction(
    UPDATE_REVIEW,
    props<{payload: Review}>()
);

export const UpdateReviewSuccess = createAction(
    UPDATE_REVIEW_SUCCESS,
    props<{payload: Review}>()
);

export const UpdateReviewFail = createAction(
    UPDATE_REVIEW_FAIL,
    props<{payload: any}>()
);

