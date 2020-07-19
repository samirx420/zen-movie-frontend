import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromMovie from '../reducers/movie.reducer';

export const getMoviesState = createSelector(
    fromFeature.getMovieState,
    (state: fromFeature.MovieState) => state.movie
);

export const getMoviesEntities = createSelector(
    getMoviesState,
    fromMovie.getMovieEntities
);

export const getMovies = createSelector(
    getMoviesEntities,
    entities => {
        return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
    }
);

export const getMoviesLoaded = createSelector(
    getMoviesState,
    fromMovie.getMovieLoaded
);

export const getMoviesLoading = createSelector(
    getMoviesState,
    fromMovie.getMovieLoading
);