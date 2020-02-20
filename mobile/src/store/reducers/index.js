import {combineReducers} from 'redux';
import {createReducer} from '../helpers';
import * as keys from '../constants';

let actionHandler = key => ({
  [`${key}`]: (state, action) => ({...state, ...action.payload}),
});

let arrActionHandler = key => ({
  [`${key}`]: (state, action) => [...action.payload],
});

export const initialUser = {
  locale: 'fr',
  country: 'FR',
  avatar: '',
  email: '',
  first_name: '',
  last_name: '',
  membership_active: '',
  referral_key: '',
  referral_qr_code: '',
  role: '',
  role_status: '',
  show_pricing: '',
  user_active: '',
  user_id: '',
  token: '',
};
export const initialModalAlert = {
  msg: '',
  visible: false,
  premium: false,
  icon: 'emoticon-sad',
  modalType: '',
  modalTitle: '',
  modalBtnText: '',
};
//Reducers
const user = createReducer(initialUser, actionHandler(keys.SET_USER));
const popup = createReducer({}, actionHandler(keys.SET_POPUP));
const competition = createReducer({}, actionHandler(keys.SET_COMPETITION));

const coupons = createReducer([], arrActionHandler(keys.SET_WEB_COUPONS));
// const events = createReducer([], [arrActionHandler(keys.SET_EVENTS),]);
const events = (state = [], action) => {
  switch (action.type) {
    case keys.SET_EVENTS:
      return [...action.payload];
    case keys.TOGGLE_SUBSCRIBE:
      let newArray = state.slice();
      newArray.forEach(event =>
        event.competition_date_id === action.payload ? (event.subscribed = !event.subscribed) : null,
      );
      return newArray;
    default:
      return state;
  }
};
const filters = createReducer([], arrActionHandler(keys.SET_FILTERS));

const modalAlert = createReducer(initialModalAlert, actionHandler(keys.SET_MODAL_ALERT));
const axiosRequestLoader = createReducer({value: false}, actionHandler(keys.SET_AXIOS_REQUEST));
const loginCredentials = createReducer({value: ''}, actionHandler(keys.SET_LOGIN_CREDENTIDALS));
const deviceId = createReducer({value: ''}, actionHandler(keys.SET_DEVICE_ID));
const firstTimeOpening = createReducer({value: true}, actionHandler(keys.FIRST_TIME_OPENING));
const isUserSignedIn = createReducer({value: false}, actionHandler(keys.IS_USER_SIGNED_IN));
const showPopup = createReducer({value: false}, actionHandler(keys.TOGGLE_ADVERTISEMENT));
const bellCount = createReducer({value: 0}, actionHandler(keys.SET_BELL_COUNT));

export const rootReducer = combineReducers({
  user,
  bellCount,
  showPopup,
  popup,
  loginCredentials,
  modalAlert,
  coupons,
  firstTimeOpening,
  isUserSignedIn,
  deviceId,
  axiosRequestLoader,
  events,
  filters,
  competition,
});
