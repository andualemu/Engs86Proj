import React, { Component } from 'react';
import {
  StyleSheet,
  View, Image, Text,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import LoginForm from './loginform';


export default class Login extends Component {
  signup() {
    Actions.signup();
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logocontainter}>
          <Image
            style={styles.logo}
            source={require('../../images/pencil_logo.png')}
          />
          <Text>study efficiently!</Text>
        </View>
        <View style={styles.formContiner}>
          <LoginForm />
        </View>
        <View style={styles.toSingupContainer}>
          <Text style={styles.signupText}> Don't have an account yet? </Text>
          <TouchableOpacity onPress={this.signup}>
            <Text style={styles.signupButton}>Signup</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
  },
  logocontainter: {
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  logo: {
    width: 100,
    height: 100,
  },
  toSingupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  signupText: {
    textAlign: 'center',
  },
  signupButton: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
