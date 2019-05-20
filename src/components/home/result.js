import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { getScore, updateUserScore } from '../../actions/index';
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    };
  }

  componentDidMount() {
    getScore().then((res) => {
      this.setState({ result: parseInt(res) });

      const newScore = {
        score: this.props.user.score + parseInt(res),
        totalNoQ: this.props.user.totalNoQ + 10,
      };
      updateUserScore(this.props.user.id, newScore);
    });
  }

  render() {
    return (
      <View>
        <Text>Result: {this.state.result}/10</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

function mapStateToProps(state) {
  return ({
    user: state.user.profile,
  });
}

export default connect(mapStateToProps, null)(Result);
