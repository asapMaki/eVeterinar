import userService from 'service/User';

export const createAction = (type, actionProps) => {
  return {
    type,
    ...actionProps,
  };
};

export const createAsyncAction = (actionType, asyncRequestFn = {}, requestParams = {}) => {
  return async dispatch => {
    dispatch(createAction(`${actionType}_START`, {request: requestParams}));
    asyncRequestFn(requestParams)
      .then(({data}) => {
        dispatch(
          createAction(`${actionType}_SUCCESS`, {
            response: data,
          }),
        );
      })
      .catch(
        ({
          response: {
            data: {message},
          },
        }) => {
          dispatch(createAction(`${actionType}_ERROR`, {error: message}));
        },
      );
  };
};

export const createReducer = (initialState = {}, actionHandlerKeyFuncs = {}) => {
  return (state = initialState, action) => {
    const actionHandler = actionHandlerKeyFuncs[action.type];
    return actionHandler ? actionHandler(state, action) : state;
  };
};

const initialAsyncState = {isLoading: false, response: null, request: null};
export const createAsyncReducer = (actionType, initialState = initialAsyncState, actionHandlerKeyFuncs = {}) => {
  const startReducerFn = (state, action) => ({
    ...state,
    isLoading: true,
    request: action.request,
  });
  const successReducerFn = (state, action) => ({
    ...state,
    isLoading: false,
    success: true,
    ...action.response,
  });
  const errorReducerFn = (state, action) => ({
    ...state,
    isLoading: false,
    success: false,
    error: action.error,
  });

  return createReducer(initialState, {
    [`${actionType}_START`]: startReducerFn,
    [`${actionType}_SUCCESS`]: successReducerFn,
    [`${actionType}_ERROR`]: errorReducerFn,
    ...actionHandlerKeyFuncs,
  });
};
