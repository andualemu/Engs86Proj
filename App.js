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
  StyleSheet,
} from 'react-native';
import Routes from './src/routes';
import authReducer from './src/reducers/auth-reducer';
/* eslint-disable react/prefer-stateless-function */

const store = createStore(authReducer, applyMiddleware(thunk));

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store} style={styles.container}>
        <Routes />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
