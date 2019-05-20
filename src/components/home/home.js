import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { getUserData, getUsername } from '../../actions/index';

/* eslint-disable react/prefer-stateless-function */
class Home extends Component {
  componentDidMount() {
    getUsername().then((username) => {
      this.props.getUserData(username);
    });
  }

  routeToBiology = () => {
    Actions.biology();
  }

  render() {
    console.log(this.props.user);
    return (
      <ScrollView>
        <View style={styles.container}>

          <TouchableOpacity style={styles.user_summary_container}>
            <Icon style={styles.user_icon} name="account-circle" size={100} />
            <View style={styles.user_info}>
              <Text>User: {this.props.user ? this.props.user.username : 'none'}</Text>
              <Text>Points: {this.props.user ? this.props.user.points : 'none'}</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.quizes_container}>
            <TouchableOpacity style={styles.quiz_tile} onPress={this.routeToBiology}>
              <Text>Biology</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quiz_tile}>
              <Text>Physics</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quiz_tile}>
              <Text>Chemistry</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quiz_tile}>
              <Text>Mathimatics</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quiz_tile}>
              <Text>English</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
  /* replace text quiz tiles with images */
}

function mapStateToProps(state) {
  return ({
    user: state.user.profile,
  });
}

const mapDispatchToProps = {
  getUserData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },

  user_summary_container: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#404040',
    margin: '5%',
  },
  user_icon: {
    borderWidth: 2,
    borderColor: '#FFFFFF',
    flex: 1,
  },
  user_info: {
    flex: 2,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },

  quizes_container: {
    flex: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#404040',
    margin: '5%',
  },
  quiz_tile: {
    borderWidth: 2,
    borderColor: '#FFFFFF',
    width: '50%',
    paddingBottom: '50%',
  },
});
