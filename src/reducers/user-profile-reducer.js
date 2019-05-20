import { ActionTypes } from '../actions';

const initialState = {};

const UserProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_PROFILE:
      return Object.assign({}, state, { profile: action.payload });
    default:
      return state;
  }
};

export default UserProfileReducer;
