import axios from 'axios';

const ROOT_URL = 'http://localhost:9090/api';
const API_KEY = '';
// const ROOT_URL = 'https://national-quiz-api.herokuapp.com/api';

// keys for actiontypes
/* eslint-disable import/prefer-default-export */
export const ActionTypes = {
  FETCH_QUESTIONS: 'FETCH_QUESTIONS',

  FETCH_PROFILE: 'FETCH_PROFILE',
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',

  ERROR: 'ERROR',
};

// trigger to deauth if there is error
// can also use in your error reducer if you have one to display an error message
export function authError(error) {
  return {
    type: ActionTypes.AUTH_ERROR,
    message: error,
  };
}

export function signupUser({
  email, password, school, username,
}) {
  console.log(email);
  return (dispatch) => {
    console.log('here');
    axios.get(`${ROOT_URL}/profile/${email}?key=${API_KEY}`)
      .then((res) => {
        dispatch({ type: ActionTypes.AUTH_USER });
        console.log('success');
      })
      .catch((err) => {
        console.log('fail');
        console.error(err);
        dispatch(authError(`Sign Up Failed: ${err}`));
      });
  };
}
