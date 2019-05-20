import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import { getLeaderboard } from '../../actions/index';

class Leaderboard extends Component {
  componentDidMount() {
    // request leaderboard data
    this.props.getLeaderboard();
  }

  renderLeaderboard = () => {
    const { leaderboard } = this.props;
    if (!leaderboard || leaderboard.length === 0) {
      return <View />;
    }
    return (
      leaderboard.map(user => <Text key={user.username}>{user.username}</Text>)
    );
  }

  render() {
    console.log(this.props.leaderboard);
    return (
      <View>
        <Text>Leaderboard</Text>
        {this.renderLeaderboard()}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return ({
    user: state.user.profile,
    leaderboard: state.leaderboard.leaderboard,
  });
}

const mapDispatchToProps = {
  getLeaderboard,
};

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);


// const styles = StyleSheet.create({
//
// });
