import axios from 'axios';
import { AsyncStorage } from 'react-native';

const ROOT_URL = 'http://10.0.2.2:9090/api';
const API_KEY = '';
// const ROOT_URL = 'https://national-quiz-api.herokuapp.com/api';

// keys for actiontypes
/* eslint-disable import/prefer-default-export */
export const ActionTypes = {
  FETCH_QUESTIONS: 'FETCH_QUESTIONS',

  FETCH_PROFILE: 'FETCH_PROFILE',
  FETCH_LEADERBOARD: 'FETCH_LEADERBOARD',
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
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signup`, {
      email, password, school, username,
    })
      .then((response) => {
        console.log(response);
        // store token
        const storeToken = async () => {
          try {
            await AsyncStorage.setItem('token', response.data.token);
            await AsyncStorage.setItem('username', username);
            dispatch({
              type: ActionTypes.AUTH_USER,
              payload: response.data.token,
            });
          } catch (error) {
            console.error('error saving token on local storage', error);
          }
        };
        storeToken();
      })
      .catch(((err) => {
        console.error(err.response.data);
        dispatch(authError(`Sign Up Failed: ${err.response.data}`));
      }));
  };
}

export function signinUser({ username, password }) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/signin`, {
      password, username,
    })
      .then((response) => {
        console.log(response);
        // store token
        const storeToken = async () => {
          try {
            await AsyncStorage.setItem('token', response.data.token);
            await AsyncStorage.setItem('username', username);
            dispatch({
              type: ActionTypes.AUTH_USER,
              payload: response.data.token,
            });
          } catch (error) {
            console.error('error saving token on local storage', error);
          }
        };
        storeToken();
      })
      .catch(((err) => {
        console.error(err.response.data);
        dispatch(authError(`Sign In Failed: ${err.response.data}`));
      }));
  };
}

export function signoutUser() {
  return (dispatch) => {
    // remove token
    const removeToken = async () => {
      try {
        await AsyncStorage.removeItem('token');
        await AsyncStorage.removeItem('username');
        dispatch({
          type: ActionTypes.DEAUTH_USER,
        });
      } catch (error) {
        console.error('error removing token from local storage', error);
      }
    };
    removeToken();
  };
}

export function get10RandomQuestions(subject) {
  return (dispatch) => {
    console.log(subject);
    axios.get(`${ROOT_URL}/quizes/${subject}`)
      .then((response) => {
        dispatch({
          type: ActionTypes.FETCH_QUESTIONS,
          payload: response.data,
        });
      })
      .catch(((err) => {
        console.error(err.response.data);
      }));
  };
}

export async function getUsername() {
  let username = '';
  try {
    username = await AsyncStorage.getItem('username') || 'none';
  } catch (error) {
    console.log('error getting curr_score from local storage', error.message);
  }
  return username;
}

export async function getScore() {
  let score = '';
  try {
    score = await AsyncStorage.getItem('curr_score') || 'none';
  } catch (error) {
    console.log('error getting curr_score from local storage', error.message);
  }
  return score;
}

export function recordScore() {
  const incScore = async () => {
    try {
      const prevScore = await AsyncStorage.getItem('curr_score') || 'none';
      const prevScoreStr = (parseInt(prevScore) + 1).toString();
      await AsyncStorage.removeItem('curr_score');
      await AsyncStorage.setItem('curr_score', prevScoreStr);
    } catch (error) {
      console.error('error saving curr_score on local storage', error);
    }
  };
  incScore();
}

export async function clearScore() {
  try {
    await AsyncStorage.setItem('curr_score', '0');
  } catch (error) {
    console.error('error clearing curr_score from local storage', error);
  }
}

export function getUserData(username) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/profile/${username}`)
      .then((response) => {
        dispatch({
          type: ActionTypes.FETCH_PROFILE,
          payload: response.data,
        });
      })
      .catch(((err) => {
        console.error('err', err.response.data);
      }));
  };
}

export function updateUserScore(id, newScore) {
  axios.put(`${ROOT_URL}/points/${id}`, newScore)
    .then((response) => {
      console.log('response', response)
    })
    .catch(((err) => {
      console.error('err', err.response.data);
    }));
}

export function getLeaderboard() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/leaderboard`)
      .then((response) => {
        dispatch({
          type: ActionTypes.FETCH_LEADERBOARD,
          payload: response.data,
        });
      })
      .catch(((err) => {
        console.error('err', err.response.data);
      }));
  };
}
