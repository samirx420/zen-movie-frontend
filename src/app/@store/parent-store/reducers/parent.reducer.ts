import * as fromParent from '../actions';
import { createReducer, on, Action } from '@ngrx/store';

import { Parent } from '../../../@core/models/parent.model';

export interface ParentState {
    entities: { [id: number]: Parent };
    loading : boolean;
    loaded  : boolean;
}

export const initialState: ParentState = {
    entities: {},
    loading: false,
    loaded : false,
};

const parentReducer = createReducer(
    initialState,
    on(fromParent.LoadParent, state => ({ ...state, loading: true })),
    on(fromParent.LoadParentSuccess, (state, payload) => {
        const entities = payload.data.reduce(
            (entities: { [id: number]: Parent }, parent: Parent) => {
                return {
                    ...entities,
                    [parent.id]: parent,
                };
            },
            {}
        );

        return {
            ...state,
            loading: false,
            loaded : true,
            entities,
        };
    }),
    on(fromParent.LoadParentFail, state => ({ ...state, loading: false, loaded: false, })),
    on(fromParent.CreateParentSuccess, (state, { payload }) => {
        const entities = {
            ...state.entities,
            [payload.id]: payload,
        };

        return {
            ...state,
            entities,
        };
    }),
    on(fromParent.UpdateParentSuccess, (state, { payload }) => {

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

export function reducer(state: ParentState | undefined, action: Action) {
    return parentReducer(state, action);
}

export const getParentEntities = (state: ParentState) => state.entities;
export const getParentLoading  = (state: ParentState) => state.loading;
export const getParentLoaded   = (state: ParentState) => state.loaded;