import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromMovie from './movie.reducer';

export interface MovieState {
    movie: fromMovie.MovieState
}

export const reducers: ActionReducerMap<MovieState> = {
    movie: fromMovie.reducer,
};

export const getMovieState = createFeatureSelector<MovieState>(
    'movie'
);