import {combineReducers} from 'redux';
import {createReducer} from '../helpers';
import * as keys from '../constants';

let singleValueActionHandler = (key: string) => ({
  [`${key}`]: (state: any, action: any) => action.payload,
});

let objectActionHandler = (key: string) => ({
  [`${key}`]: (state: any, action: any) => ({...state, ...action.payload}),
});

let arrActionHandler = (key: string) => ({
  [`${key}`]: (state: any, action: any) => [...action.payload],
});

export const initialUser = {
  id: '',
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  role: '',
  is_online: false,
  created_at: '',
  updated_at: '',
};
//Reducers
const user = createReducer(initialUser, objectActionHandler(keys.SET_USER));
const isUserSignedIn = createReducer({value: false}, singleValueActionHandler(keys.IS_USER_SIGNED_IN));
// const firstTimeOpening = createReducer({value: true}, singleValueActionHandler(keys.FIRST_TIME_OPENING));

export const rootReducer = combineReducers({
  user,
  isUserSignedIn,
});
