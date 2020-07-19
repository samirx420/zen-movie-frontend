import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromParent from './parent.reducer';

export interface ParentState {
    parent: fromParent.ParentState
}

export const reducers: ActionReducerMap<ParentState> = {
    parent: fromParent.reducer,
};

export const getParentState = createFeatureSelector<ParentState>(
    'parent'
);