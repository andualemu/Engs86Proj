import { ActionTypes } from '../actions';

const initialState = {
  questions: [],
};

const QuestionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_QUESTIONS:
      return Object.assign({}, state, { questions: action.payload });
    default:
      return state;
  }
};

export default QuestionsReducer;
