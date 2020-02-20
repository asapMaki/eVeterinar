import * as keys from '../constants';
import {createAction, createAsyncAction} from '../helpers';
import {initialModalAlert, initialUser} from '../reducers';

// ------------------------------ OBJECTS
export const setUser = user => createAction(keys.SET_USER, {payload: user});
export const resetUser = user => createAction(keys.SET_USER, {payload: {...initialUser, ...user}});
export const setLoginCredentials = email => createAction(keys.SET_LOGIN_CREDENTIDALS, {payload: {value: email}});
export const setPopup = popup => createAction(keys.SET_POPUP, {payload: popup});
export const setCompetition = competition => createAction(keys.SET_COMPETITION, {payload: competition});
// ------------------------------ ARRAYS
export const setWebCoupons = coupons => createAction(keys.SET_WEB_COUPONS, {payload: coupons});
export const setEvents = events => createAction(keys.SET_EVENTS, {payload: events});
export const toggleSubscribe = competition_date_id =>
  createAction(keys.TOGGLE_SUBSCRIBE, {payload: competition_date_id});
export const setFilters = filters => createAction(keys.SET_FILTERS, {payload: filters});

// ------------------------------ TRUE / FALSE
export const setModalAlert = modalAlert =>
  createAction(keys.SET_MODAL_ALERT, {payload: {...initialModalAlert, ...modalAlert}});
// ------------------------------ TRUE / FALSE
export const setAxiosRequestLoader = loading => createAction(keys.SET_AXIOS_REQUEST, {payload: {value: loading}});
export const setOSdeviceID = deviceId => createAction(keys.SET_DEVICE_ID, {payload: {value: deviceId}});
export const setFirstTimeOpening = () => createAction(keys.FIRST_TIME_OPENING, {payload: {value: false}});
export const changeSignInStatus = status => createAction(keys.IS_USER_SIGNED_IN, {payload: {value: status}});
export const setPopupVisible = status => createAction(keys.TOGGLE_ADVERTISEMENT, {payload: {value: status}});
export const setBellCount = count => createAction(keys.SET_BELL_COUNT, {payload: {value: count}});
