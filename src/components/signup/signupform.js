import React, { Component } from 'react';
import {
  StyleSheet, View, TextInput, TouchableOpacity, Text,
} from 'react-native';

export default class SignupForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="email"
          placeholderTextColor="#rgba(255,255,255,0.7)"
          returnKeyType="next"
          onSubmitEditing={() => this.schoolInput.focus()}
          autoCapitalize="none"
          autoCorrect={false}
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
          // keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          secureTextEntry
          placeholderTextColor="#rgba(255,255,255,0.7)"
          returnKeyType="go"
          ref={input => this.passwordInput = input}
        />
        <TouchableOpacity style={styles.buttonContianer}>
          <Text style={styles.buttonText}> LOGIN </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
