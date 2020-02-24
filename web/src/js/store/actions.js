import * as keys from './constants';
import {createAction, createAsyncAction} from './helpers';
import {initialUser} from './reducers';

// ------------------------------ OBJECTS
export const resetUser = user => createAction(keys.SET_USER, {payload: {...initialUser, ...user}});
export const setUser = user => createAction(keys.SET_USER, {payload: user});
export const setUserSignedIn = signedIn => createAction(keys.IS_USER_SIGNED_IN, {payload: signedIn});
