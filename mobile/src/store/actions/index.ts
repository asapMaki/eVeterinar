import * as keys from '../constants';
import {createAction, createAsyncAction} from '../helpers';
import User from 'interfaces/User';
import {initialUser} from '../reducers';

// ------------------------------ OBJECTS
export const resetUser = (user: User) => createAction(keys.SET_USER, {payload: {...initialUser, ...user}});
export const setUser = (user: User) => createAction(keys.SET_USER, {payload: user});
export const setUserSignedIn = (signedIn: boolean) => createAction(keys.IS_USER_SIGNED_IN, {payload: signedIn});
