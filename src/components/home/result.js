import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
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
      <View style={styles.container}>
        <Text style={styles.congrats_text}>Magic Card Completed!</Text>
        <Text style={styles.result_text}>{this.state.result}/10</Text>
        <Image style={styles.image_style} source={require('../../images/graduate.png')} />
        <Button
          onPress={Actions.Nav}
          title="Go back to Home"
          color="#841584"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#483B5A',
  },
  congrats_text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  result_text: {
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 100,
    padding: 20,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image_style: {
    height: '45%',
  },
});

function mapStateToProps(state) {
  return ({
    user: state.user.profile,
  });
}

export default connect(mapStateToProps, null)(Result);
