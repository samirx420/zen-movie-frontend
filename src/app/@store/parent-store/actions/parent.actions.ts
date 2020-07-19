import { createAction, props } from '@ngrx/store';

// MODELS
import { Parent }           from '../../../@core/models/parent.model';
import { ResponseWrapper }  from '../../../@core/models/response.model';

// load parent
export const LOAD_PARENT          = '[Parent] Load Parent';
export const LOAD_PARENT_SUCCESS  = '[Parent] Load Parent Success';
export const LOAD_PARENT_FAIL     = '[Parent] Load Parent Fail';

export const LoadParent = createAction(
    LOAD_PARENT,
);

export const LoadParentSuccess = createAction(
    LOAD_PARENT_SUCCESS,
    props<ResponseWrapper<Parent>>()
);

export const LoadParentFail = createAction(
    LOAD_PARENT_FAIL,
    props<{payload: any}>()
);

// create parent.
export const CREATE_PARENT            = '[Parent] Create Parent';
export const CREATE_PARENT_SUCCESS    = '[Parent] Create Parent Success';
export const CREATE_PARENT_FAIL       = '[Parent] Create Parent Fail';

export const CreateParent = createAction(
    CREATE_PARENT,
    props<{payload: Parent}>()
);

export const CreateParentSuccess = createAction(
    CREATE_PARENT_SUCCESS,
    props<{payload: Parent}>()
);

export const CreateParentFail = createAction(
    CREATE_PARENT_FAIL,
    props<{error: any}>()
);

// update parent
export const UPDATE_PARENT            = '[Parent] Update Parent';
export const UPDATE_PARENT_SUCCESS    = '[Parent] Update Parent Success';
export const UPDATE_PARENT_FAIL       = '[Parent] Update Parent Fail';

export const UpdateParent = createAction(
    UPDATE_PARENT,
    props<{payload: Parent}>()
);

export const UpdateParentSuccess = createAction(
    UPDATE_PARENT_SUCCESS,
    props<{payload: Parent}>()
);

export const UpdateParentFail = createAction(
    UPDATE_PARENT_FAIL,
    props<{payload: any}>()
);
