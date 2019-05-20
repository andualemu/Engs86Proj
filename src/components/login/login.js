import React, { Component } from 'react';
import {
  StyleSheet,
  View, Image, Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { signinUser } from '../../actions/index';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  goToSignupScreen() {
    Actions.signup();
  }

  signinUser = () => {
    this.props.signinUser(this.state);
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
          <View style={styles.loginformcontainer}>
            <TextInput
              style={styles.input}
              placeholder="username"
              placeholderTextColor="#rgba(255,255,255,0.7)"
              returnKeyType="next"
              onSubmitEditing={() => this.passwordInput.focus()}
              autoCapitalize="none"
              autoCorrect={false}
              value={this.state.username}
              onChangeText={username => this.setState({ username })}
            />
            <TextInput
              style={styles.input}
              placeholder="password"
              secureTextEntry
              placeholderTextColor="#rgba(255,255,255,0.7)"
              returnKeyType="go"
              ref={input => this.passwordInput = input}
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />
            <TouchableOpacity style={styles.buttonContianer} onPress={this.signinUser}>
              <Text style={styles.buttonText}> LOGIN </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.toSingupContainer}>
          <Text style={styles.signupText}> Don't have an account yet? </Text>
          <TouchableOpacity onPress={this.goToSignupScreen}>
            <Text style={styles.signupButton}>Signup</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const mapDispatchToProps = {
  signinUser,
};

export default connect(null, mapDispatchToProps)(Login);

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
  loginformcontainer: {
    padding: 20,
  },
  input: {
    height: 40,
    backgroundColor: '#rgba(255,255,255,0.2)',
    marginBottom: 20,
    color: '#FFF',
    paddingHorizontal: 10,
  },
  buttonContianer: {
    backgroundColor: '#2980b9',
    paddingVertical: 15,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700',
  },
});
