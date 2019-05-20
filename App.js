/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';
import axiosMiddleware from 'redux-axios-middleware';
import {
  AsyncStorage,
} from 'react-native';
import Routes from './src/routes';
import { ActionTypes } from './src/actions/index';
import rootReducer from './src/reducers/index';
/* eslint-disable react/prefer-stateless-function */

const client = axios.create({
  baseURL: '',
  responseType: 'json',
});

const store = createStore(rootReducer, applyMiddleware(axiosMiddleware(client), thunk));

type Props = {};
export default class App extends Component<Props> {
  componentDidMount() {
    // AUTO Login
    const getToken = async () => {
      let token = '';
      try {
        token = await AsyncStorage.getItem('token') || 'none';
        if (token !== 'none') {
          store.dispatch({
            type: ActionTypes.AUTH_USER,
            payload: token,
          });
        }
      } catch (error) {
        console.log(error.message);
      }
      return token;
    };
    getToken();
  }

  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}
