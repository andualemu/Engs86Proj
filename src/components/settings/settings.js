import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';
import { connect } from 'react-redux';
import { signoutUser } from '../../actions/index';

class Settings extends Component {
  signout = () => {
    this.props.signoutUser();
  }

  render() {
    console.log(this.props.user);
    return (
      <View style={styles.container}>
        <Text style={styles.header}>((( Settings )))</Text>
        <View>
          <Text style={styles.text}>username : {this.props.user.username}</Text>
          <Text style={styles.text}>email : {this.props.user.email}</Text>
          <Text style={styles.text}>school : {this.props.user.school}</Text>
          <Text style={styles.text}>total attempted : {this.props.user.totalNoQ}</Text>
          <Text style={styles.text}>score : {this.props.user.score}</Text>
        </View>
        <Button
          onPress={this.signout}
          title="Sign Out!"
          color="#841584"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: '#483B5A',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 40,
  },
});

function mapStateToProps(state) {
  return ({
    user: state.user.profile,
  });
}

const mapDispatchToProps = {
  signoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

// const styles = StyleSheet.create({
//
// });
