import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
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
      <ScrollView style={styles.scrollview}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.user_summary_container}>
            <Icon style={styles.user_icon} name="account-circle" size={100} />
            <View style={styles.user_info}>
              <Text style={styles.user_info_text}>Welcome to E-QUIZ!</Text>
              <Text style={styles.user_info_text}>username: {this.props.user ? this.props.user.username : 'none'}</Text>
              <Text style={styles.user_info_text}>total points: {this.props.user ? this.props.user.score : 'none'}</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.quizes_container}>
            <TouchableOpacity style={styles.quiz_tile} onPress={this.routeToBiology}>
              <Image source={require('../../images/Mircroscope.png')} style={styles.quiz_image} />
              <Text style={styles.quiz_text}>Biology</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quiz_tile}>
              <Image source={require('../../images/Gravitanional.png')} style={styles.quiz_image} />
              <Text style={styles.quiz_text}>Physics</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quiz_tile}>
              <Image source={require('../../images/Experimenttube.png')} style={styles.quiz_image} />
              <Text style={styles.quiz_text}>Chemistry</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quiz_tile}>
              <Image source={require('../../images/Geometry.png')} style={styles.quiz_image} />
              <Text style={styles.quiz_text}>Mathematics</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quiz_tile}>
              <Image source={require('../../images/Alien.png')} style={styles.quiz_image} />
              <Text style={styles.quiz_text}>English</Text>
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
  scrollview: {
    backgroundColor: '#483B5A',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: '5%',
  },

  user_summary_container: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#3AC5C2',
  },
  user_icon: {
    flex: 1,
    marginLeft: 5,
  },
  user_info: {
    flex: 2,
  },
  user_info_text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },

  quizes_container: {
    marginTop: '5%',
    flex: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  quiz_tile: {
    margin: '4%',
    width: '42%',
    padding: '5%',
    paddingBottom: '1%',
    paddingTop: '2%',
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  quiz_image: {
    flex: 1,
    width: '100%',
  },
  quiz_text: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
    paddingTop: 2,
  },
});
