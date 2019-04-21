import React, { Component } from 'react';
import {
  StyleSheet,
  View, Image, Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      school: '',
      username: '',
      password: '',
    };
  }

  login = () => {
    console.log(this.state);
  }

  goToLoginScreen = () => {
    Actions.login();
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
        <View>
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="email"
              placeholderTextColor="#rgba(255,255,255,0.7)"
              returnKeyType="next"
              onSubmitEditing={() => this.schoolInput.focus()}
              autoCapitalize="none"
              autoCorrect={false}
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />
            <TextInput
              style={styles.input}
              placeholder="school, region e.g. BGS, Dire Dawa"
              placeholderTextColor="#rgba(255,255,255,0.7)"
              returnKeyType="next"
              onSubmitEditing={() => this.usernameInput.focus()}
              ref={input => this.schoolInput = input}
              autoCapitalize="none"
              autoCorrect={false}
              value={this.state.school}
              onChangeText={school => this.setState({ school })}
            />
            <TextInput
              style={styles.input}
              placeholder="username"
              placeholderTextColor="#rgba(255,255,255,0.7)"
              returnKeyType="next"
              onSubmitEditing={() => this.passwordInput.focus()}
              ref={input => this.usernameInput = input}
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
            <TouchableOpacity onPress={this.login} style={styles.buttonContianer}>
              <Text style={styles.buttonText}> REGISTER </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.toLoginContainer}>
          <Text style={styles.loginText}> Already have an account? </Text>
          <TouchableOpacity onPress={this.goToLoginScreen}>
            <Text style={styles.loginButton}>Login</Text>
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
  toLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  loginText: {
    textAlign: 'center',
  },
  loginButton: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  formContainer: {
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
