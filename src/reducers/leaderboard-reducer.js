import { ActionTypes } from '../actions';

const initialState = {};

const LeaderboradReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_LEADERBOARD:
      return Object.assign({}, state, { leaderboard: action.payload });
    default:
      return state;
  }
};

export default LeaderboradReducer;
