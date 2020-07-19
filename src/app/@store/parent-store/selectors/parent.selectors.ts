import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromParent from '../reducers/parent.reducer';

export const getParentsState = createSelector(
    fromFeature.getParentState,
    (state: fromFeature.ParentState) => state.parent
);

export const getParentsEntities = createSelector(
    getParentsState,
    fromParent.getParentEntities
);

export const getParents = createSelector(
    getParentsEntities,
    entities => {
        return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
    }
);

export const getParentsLoaded = createSelector(
    getParentsState,
    fromParent.getParentLoaded
);

export const getParentsLoading = createSelector(
    getParentsState,
    fromParent.getParentLoading
);