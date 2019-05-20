import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Login from './components/login/login';
import Signup from './components/signup/signup';
// import Home from './components/home/home';
import Nav from './navigation';
import Biology from './components/home/bio-quiz';
import Result from './components/home/result';
/* eslint-disable react/prefer-stateless-function */
class Routes extends Component {
  homeOrLogin = () => {
    if (this.props.auth) {
      return (
        <View>
          <Scene key="Nav" component={Nav} title="Home" hideNavBar initial enderLeftButton={() => (null)} type="replace"/>
          <Scene key="biology" component={Biology} title="Biology Q1" hideNavBar renderLeftButton={() => (null)} type="replace" />
          <Scene key="result" component={Result} title="Result" hideNavBar renderLeftButton={() => (null)} type="replace" />
        </View>
      );
    }
    return (
      <Scene key="login" component={Login} title="Login" initial />
    );
  }

  render() {
    return (
      <Router>
        <Stack key="root" hideNavBar>
          {this.homeOrLogin()}
          <Scene key="signup" component={Signup} title="Signup" />
        </Stack>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return ({
    auth: state.auth.authenticated,
  });
}

export default connect(mapStateToProps, null)(Routes);
