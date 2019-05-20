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
    return (
      <View>
        <Text>Settings</Text>
        <Button
          onPress={this.signout}
          title="Sign Out!"
          color="#841584"
        />
      </View>
    );
  }
}

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
