import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Login from './components/login/login';
import Signup from './components/signup/signup';
// import Home from './components/home/home';
import Nav from './navigation';
import Biology from './components/home/bio-quiz';
import Biology2 from './components/home/bio-quiz2';
import Biology3 from './components/home/bio-quiz3';
import Biology4 from './components/home/bio-quiz4';
import Biology5 from './components/home/bio-quiz5';
import Biology6 from './components/home/bio-quiz6';
import Biology7 from './components/home/bio-quiz7';
import Biology8 from './components/home/bio-quiz8';
import Biology9 from './components/home/bio-quiz9';
import Biology10 from './components/home/bio-quiz10';
import Result from './components/home/result';
/* eslint-disable react/prefer-stateless-function */
class Routes extends Component {
  homeOrLogin = () => {
    if (this.props.auth) {
      return (
        <View>
          <Scene key="Nav" component={Nav} title="Home" initial />
          <Scene key="biology" component={Biology} title="Biology Q1" renderLeftButton={() => (null)} type="replace" />
          <Scene key="biology2" component={Biology2} title="Biology Q2" renderLeftButton={() => (null)} type="replace" />
          <Scene key="biology3" component={Biology3} title="Biology Q3" renderLeftButton={() => (null)} type="replace" />
          <Scene key="biology4" component={Biology4} title="Biology Q4" renderLeftButton={() => (null)} type="replace" />
          <Scene key="biology5" component={Biology5} title="Biology Q5" renderLeftButton={() => (null)} type="replace" />
          <Scene key="biology6" component={Biology6} title="Biology Q6" renderLeftButton={() => (null)} type="replace" />
          <Scene key="biology7" component={Biology7} title="Biology Q7" renderLeftButton={() => (null)} type="replace" />
          <Scene key="biology8" component={Biology8} title="Biology Q8" renderLeftButton={() => (null)} type="replace" />
          <Scene key="biology9" component={Biology9} title="Biology Q9" renderLeftButton={() => (null)} type="replace" />
          <Scene key="biology10" component={Biology10} title="Biology Q10" renderLeftButton={() => (null)} type="replace" />
          <Scene key="result" component={Result} title="Result" renderLeftButton={() => (null)} type="replace" />
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
