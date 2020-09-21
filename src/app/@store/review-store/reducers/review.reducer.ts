import * as fromMovie from '../actions';
import { createReducer, on, Action } from '@ngrx/store';

import { Review } from '../../../@core/models/review.model';
import { Paged } from '../../../@core/models/paged.model';

export interface ReviewState {
    entities : { [id: number]: Review };
    paged    : Paged,
    loading  : boolean;
    loaded   : boolean;
}

export const initialState: ReviewState = {
    entities : {},
    paged    : {},
    loading  : false,
    loaded   : false,
};

const reviewReducer = createReducer(
    initialState,
    on(fromMovie.LoadReviewByMovie, state => ({ ...state, loading: true })),
    on(fromMovie.LoadReviewByMovieSuccess, (state, payload) => {
        const entities = payload.data.reduce(
            (entities: { [id: number]: Review }, review: Review) => {
                return {
                    ...entities,
                    [review.id]: review,
                };
            },
            {}
        );

        const paged = payload.paged;

        return {
            ...state,
            loading: false,
            loaded : true,
            paged  : paged,
            entities,
        };
    }),
    on(fromMovie.LoadReviewByMovieFail, state => ({ ...state, loading: false, loaded: false, })),
    on(fromMovie.CreateReviewSuccess, (state, { payload }) => {
        const entities = {
            ...state.entities,
            [payload.id]: payload,
        };

        return {
            ...state,
            entities,
        };
    }),
    on(fromMovie.UpdateReviewSuccess, (state, { payload }) => {

        const entities = {
            ...state.entities,
            [payload.id]: payload
        };

        return {
            ...state,
            entities
        }
    }),
);

export function reducer(state: ReviewState | undefined, action: Action) {
    return reviewReducer(state, action);
}

export const getReviewEntities  = (state: ReviewState) => state.entities;
export const getReviewPaged     = (state: ReviewState) => state.paged;
export const getReviewLoading   = (state: ReviewState) => state.loading;
export const getReviewLoaded    = (state: ReviewState) => state.loaded;