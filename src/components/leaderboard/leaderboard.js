import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { Table, Row, Rows } from 'react-native-table-component';
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
    const tableHead = ['R', 'username', 'school', 'score'];
    let tableData = [
      ['1', '2', '3', '4'],
      ['a', 'b', 'c', 'd'],
    ];
    let rank = 0;
    if (this.props.leaderboard) {
      tableData = this.props.leaderboard.map((user) => {
        rank += 1;
        return [rank, user.username, user.school, user.score];
      });
    }
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.header}>((( Leaderboard )))</Text>
          <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
            <Row data={tableHead} style={styles.head} flexArr={[1, 3, 3, 3]} textStyle={styles.headerText}/>
            <Rows data={tableData} flexArr={[1, 3, 3, 3]} textStyle={styles.text}/>
          </Table>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 15,
  },
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#483B5A' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6, color: 'white' },
  headerText: { margin: 6, color: 'black' },
});

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
