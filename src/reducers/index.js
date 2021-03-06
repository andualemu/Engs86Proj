import { combineReducers } from 'redux';

import AuthReducer from './auth-reducer';
import QuestionsReducer from './questions-reducer';
import UserProfileReducer from './user-profile-reducer';
import Leaderboard from './leaderboard-reducer';

const rootReducer = combineReducers({
  auth: AuthReducer,
  quest: QuestionsReducer,
  user: UserProfileReducer,
  leaderboard: Leaderboard,
});

export default rootReducer;
