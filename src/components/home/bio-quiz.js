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
import { get10RandomQuestions, recordScore, clearScore } from '../../actions/index';
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable max-len */
class Biology extends Component {
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
      qno: 0,
    };
  }

  componentDidMount() {
    console.log('here');
    this.props.get10RandomQuestions('biology');
    clearScore();
  }

  nextQuestion = () => {
    this.setState({
      aRed: false,
      bRed: false,
      cRed: false,
      dRed: false,
      aGreen: false,
      bGreen: false,
      cGreen: false,
      dGreen: false,
      answered: false,
      qno: this.state.qno + 1,
    });
    this.card.flip();
  }

  // highlightChoice(choiceLetter)

  checkAnswer = (userAnswer, userAnswerLetter) => {
    // show selection and wait a second
    // check the answer
    const questions = this.props.questions[this.state.qno];
    if (questions.answer === questions.a) {
      this.setState({ aGreen: true });
    } else if (questions.answer === questions.b) {
      this.setState({ bGreen: true });
    } else if (questions.answer === questions.c) {
      this.setState({ cGreen: true });
    } else if (questions.answer === questions.d) {
      this.setState({ dGreen: true });
    }
    if (userAnswer === questions.answer) {
      console.log('correct');
      this.card.tip();
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
    const question = questions[this.state.qno];
    return (
      <View style={styles.question}>
        <Text style={styles.question_text}>{this.state.qno + 1}. { question.question }</Text>
        <View style={styles.question_choices}>
          <TouchableOpacity disabled={this.state.answered} style={[styles.buttonStyle, this.state.aRed ? styles.redButton : styles.normal, this.state.aGreen ? styles.greenButton : styles.normal]} onPress={() => this.checkAnswer(questions[0].a, 'a')}>
            <Text style={styles.choice_text}>{ question.a }</Text>
          </TouchableOpacity>
          <TouchableOpacity disabled={this.state.answered} style={[styles.buttonStyle, this.state.bRed ? styles.redButton : styles.normal, this.state.bGreen ? styles.greenButton : styles.normal]} onPress={() => this.checkAnswer(questions[0].b, 'b')}>
            <Text style={styles.choice_text}>{ question.b }</Text>
          </TouchableOpacity>
          <TouchableOpacity disabled={this.state.answered} style={[styles.buttonStyle, this.state.cRed ? styles.redButton : styles.normal, this.state.cGreen ? styles.greenButton : styles.normal]} onPress={() => this.checkAnswer(questions[0].c, 'c')}>
            <Text style={styles.choice_text}>{ question.c }</Text>
          </TouchableOpacity>
          <TouchableOpacity disabled={this.state.answered} style={[styles.buttonStyle, this.state.dRed ? styles.redButton : styles.normal, this.state.dGreen ? styles.greenButton : styles.normal]} onPress={() => this.checkAnswer(questions[0].d, 'd')}>
            <Text style={styles.choice_text}>{ question.d }</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  explanDisplay = () => {
    const { questions } = this.props;
    if (questions.length === 0) {
      return (<View />);
    }
    return (
      <View style={styles.question}>
        <Text style={styles.question_text}>Answer: { questions[this.state.qno].answer }{'\n'}{'\n'}{ questions[0].explanation }</Text>
      </View>
    );
  }

  render() {
    console.log(this.props.questions);
    return (
      <View style={styles.container}>
        <Text style={styles.header}> ((( BIOLOGY ))) </Text>
        <CardFlip style={styles.cardContainer} ref={card => this.card = card}>
          <TouchableOpacity style={[styles.card_front, styles.card]} disabled={!this.state.answered} onPress={() => this.card.flip()}>
            {this.questionDisplay()}
          </TouchableOpacity>
          <TouchableOpacity style={[styles.card_back,  styles.card]} onPress={this.nextQuestion}>
            {this.explanDisplay()}
          </TouchableOpacity>
        </CardFlip>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    padding: 15,
  },
  container: {
    flex: 1,
    // backgroundColor: '#404040',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4F497B',
  },
  cardContainer: {
    width: '85%',
    height: '85%',
  },
  card: {
    width: '100%',
    height: '100%',
    // backgroundColor: '#FE474C',
    borderRadius: 10,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
  },
  card_front: {
    backgroundColor: '#F4F4F4',
  },
  card_back: {
    backgroundColor: '#3AC5C2',
  },

  buttonStyle: {
    height: '20%',
    backgroundColor: '#3AC5C2',
    margin: 5,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  normal: {
  },
  redButton: {
    backgroundColor: '#C54D3A',
  },
  greenButton: {
    backgroundColor: '#3AC56B',
  },
  question: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  question_text: {
    flex: 1,
    padding: '5%',
    fontSize: 25,
  },
  question_choices: {
    flex: 1,
    padding: '5%',
  },
  choice_text: {
    textAlign: 'center',
    fontSize: 20,
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

export default connect(mapStateToProps, mapDispatchToProps)(Biology);
