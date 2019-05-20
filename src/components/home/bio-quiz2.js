import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import CardFlip from 'react-native-card-flip';
import { Actions } from 'react-native-router-flux';
import { get10RandomQuestions, recordScore } from '../../actions/index';
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
class Biology2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aRed: false,
      bRed: false,
      cRed: false,
      dRed: false,
      aGreen: false,
      bGreen: false,
      cGreen: false,
      dGreen: false,
      answered: false,
    };
  }

  componentDidMount() {
    console.log('here');
    // this.props.get10RandomQuestions('biology');
  }

  // highlightChoice(choiceLetter)

  checkAnswer = (userAnswer, userAnswerLetter) => {
    // show selection and wait a second
    // check the answer
    const questions = this.props.questions[1];
    if (questions.answer === questions.a) {
      this.setState({ aGreen: true });
    } else if (questions.answer === questions.b) {
      this.setState({ bGreen: true });
    } else if (questions.answer === questions.c) {
      this.setState({ cGreen: true });
    } else if (questions.answer === questions.d) {
      this.setState({ dGreen: true });
    }
    if (userAnswer === this.props.questions[1].answer) {
      console.log('correct');
      recordScore();
    } else {
      console.log('incorrect');
      this.card.jiggle();
      if (userAnswerLetter === 'a') {
        this.setState({ aRed: true });
      } else if (userAnswerLetter === 'b') {
        this.setState({ bRed: true });
      } else if (userAnswerLetter === 'c') {
        this.setState({ cRed: true });
      } else if (userAnswerLetter === 'd') {
        this.setState({ dRed: true });
      }
    }
    this.setState({ answered: true });
    // this.card.flip();
  }

  questionDisplay = () => {
    const { questions } = this.props;
    if (questions.length === 0) {
      return (<View />);
    }
    return (
      <View>
        <Text> { questions[1].question } </Text>
        <TouchableOpacity disabled={this.state.answered} style={[styles.buttonStyle, this.state.aRed ? styles.redButton : styles.normal, this.state.aGreen ? styles.greenButton : styles.normal]} onPress={() => this.checkAnswer(questions[0].a, 'a')}>
          <Text> { questions[1].a } </Text>
        </TouchableOpacity>
        <TouchableOpacity disabled={this.state.answered} style={[styles.buttonStyle, this.state.bRed ? styles.redButton : styles.normal, this.state.bGreen ? styles.greenButton : styles.normal]} onPress={() => this.checkAnswer(questions[0].b, 'b')}>
          <Text> { questions[1].b } </Text>
        </TouchableOpacity>
        <TouchableOpacity disabled={this.state.answered} style={[styles.buttonStyle, this.state.cRed ? styles.redButton : styles.normal, this.state.cGreen ? styles.greenButton : styles.normal]} onPress={() => this.checkAnswer(questions[0].c, 'c')}>
          <Text> { questions[1].c } </Text>
        </TouchableOpacity>
        <TouchableOpacity disabled={this.state.answered} style={[styles.buttonStyle, this.state.dRed ? styles.redButton : styles.normal, this.state.dGreen ? styles.greenButton : styles.normal]} onPress={() => this.checkAnswer(questions[0].d, 'd')}>
          <Text> { questions[1].d } </Text>
        </TouchableOpacity>
      </View>
    );
  }

  explanDisplay = () => {
    const { questions } = this.props;
    if (questions.length === 0) {
      return (<View />);
    }
    return (
      <View>
        <Text> Answer: { questions[1].answer } </Text>
        <Text> { questions[1].explanation } </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <CardFlip style={styles.cardContainer} ref={card => this.card = card}>
          <TouchableOpacity style={[styles.card_front, styles.card]} disabled={!this.state.answered} onPress={() => this.card.flip()}>
            {this.questionDisplay()}
          </TouchableOpacity>
          <TouchableOpacity style={[styles.card_back,  styles.card]} onPress={() => Actions.biology3()}>
            {this.explanDisplay()}
          </TouchableOpacity>
        </CardFlip>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#404040',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  cardContainer: {
    width: '85%',
    height: '85%',
  },
  card: {
    width: '100%',
    height: '100%',
    // backgroundColor: '#FE474C',
    borderRadius: 5,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
  },
  card_front: {
    backgroundColor: '#1a6df2',
  },
  card_back: {
    backgroundColor: '#ed3831',
  },

  buttonStyle: {
    height: '15%',
    backgroundColor: '#ed3831',
    margin: 5,
  },

  normal: {
  },
  redButton: {
    backgroundColor: 'blue',
  },
  greenButton: {
    backgroundColor: 'green',
  },
});

function mapStateToProps(state) {
  return ({
    questions: state.quest.questions,
  });
}

const mapDispatchToProps = {
  get10RandomQuestions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Biology2);
