import { ActionTypes } from '../actions';

const initialState = {
  authenticated: false,
  token: '',
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      return Object.assign({}, state, { authenticated: true, token: action.payload });
    case ActionTypes.DEAUTH_USER || ActionTypes.AUTH_ERROR:
      return Object.assign({}, state, { authenticated: false, token: '' });
    default:
      return state;
  }
};

export default AuthReducer;
