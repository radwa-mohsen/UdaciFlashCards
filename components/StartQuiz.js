import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { white, blue, red, gray } from "../utils/colors";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { setLocalNotification, clearLocalNotification } from "../utils/helpers";

const WindowWidth = Dimensions.get("window").width;

class StartQuiz extends Component {
  componentDidMount() {
    clearLocalNotification().then(setLocalNotification);
  }

  state = {
    toggleView: "question",
    currentQIndex: 0,
    correctAnswers: 0,
    inCorrectAnswers: 0,
  };

  render() {
    const {
      toggleView,
      currentQIndex,
      correctAnswers,
      inCorrectAnswers,
    } = this.state;

    const QLength = this.props.deck.questions.length;
    const currentQuestion = this.props.deck.questions[currentQIndex];

    const handleAnswerQuestion = (answer) => {
      if (answer == "correct") {
        this.setState({
          correctAnswers: correctAnswers + 1,
        });
      } else if (answer == "incorrect") {
        this.setState({
          inCorrectAnswers: inCorrectAnswers + 1,
        });
      }
      if (currentQIndex <= QLength - 2) {
        this.setState({
          currentQIndex: currentQIndex + 1,
        });
      } else {
        this.setState({
          toggleView: "result",
        });
      }
    };

    // the answer face
    const Answer = (props) => {
      return (
        <React.Fragment>
          <View style={styles.textWrapper}>
            <Text style={styles.title}>
              {props.index + 1} / {QLength}
            </Text>
            <Text style={styles.question}>{props.question.answer}</Text>
          </View>
          <View style={styles.buttonsWrap}>
            <TouchableOpacity
              style={[styles.button, styles.hollowButton]}
              onPress={() => this.setState({ toggleView: "question" })}
            >
              <Text style={{ fontSize: 18 }}>
                <MaterialIcons name="arrow-back" size={16} color="black" /> Back
                to Question
              </Text>
            </TouchableOpacity>
          </View>
        </React.Fragment>
      );
    };

    // the question face

    const Question = (props) => {
      return (
        <React.Fragment>
          <View style={styles.textWrapper}>
            <Text style={styles.title}>
              {props.index + 1} / {QLength}
            </Text>
            <Text style={styles.question}>{props.question.question}</Text>
          </View>
          <View style={styles.buttonsWrap}>
            <TouchableOpacity
              style={[styles.button, styles.hollowButton]}
              onPress={() => this.setState({ toggleView: "answer" })}
            >
              <Text style={{ fontSize: 18 }}>Show Answer</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: blue }]}
              onPress={() => handleAnswerQuestion("correct")}
            >
              <Text style={[styles.text, styles.buttonText]}>Correct</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: red }]}
              onPress={() => handleAnswerQuestion("incorrect")}
            >
              <Text style={[styles.text, styles.buttonText]}>InCorrect</Text>
            </TouchableOpacity>
          </View>
        </React.Fragment>
      );
    };
    const QuizResult = () => {
      return (
        <React.Fragment>
          <View style={styles.textWrapper}>
            <Text
              style={{
                color: blue,
                fontSize: 24,
                textAlign: "center",
                marginBottom: 16,
              }}
            >
              {((correctAnswers / QLength) * 100).toFixed(0) >= 50
                ? "Awsome !!!"
                : "Study Hard && Try Again"}
            </Text>
            <Text style={[styles.resultText, { color: blue, fontSize: 32 }]}>
              Quiz Result:
            </Text>
            <Text style={styles.resultText}>
              {((correctAnswers / QLength) * 100).toFixed(0)}%
            </Text>
          </View>
          <View style={styles.buttonsWrap}>
            <TouchableOpacity
              style={[styles.button, styles.hollowButton]}
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <Text style={{ fontSize: 18 }}>
                <FontAwesome name="list-alt" size={16} color="black" /> Decks
                List
              </Text>
            </TouchableOpacity>
          </View>
        </React.Fragment>
      );
    };

    return (
      <ScrollView
        style={styles.viewWrapper}
        pagingEnabled={true}
        horizontal={true}
      >
        <View style={styles.contentWrapper}>
          {toggleView == "question" && (
            <Question index={currentQIndex} question={currentQuestion} />
          )}
          {toggleView == "answer" && (
            <Answer index={currentQIndex} question={currentQuestion} />
          )}
          {toggleView == "result" && <QuizResult />}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  viewWrapper: {
    flex: 1,
    padding: 8,
  },
  contentWrapper: {
    flex: 1,
    padding: 8,
    margin: 8,
    backgroundColor: white,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    justifyContent: "space-between",
    width: WindowWidth - 16,
  },
  textWrapper: {
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontSize: 32,
    textAlign: "center",
    margin: 8,
  },
  question: {
    fontSize: 28,
    textAlign: "center",
    marginBottom: 32,
  },
  hollowButton: {
    borderWidth: 1,
    borderColor: gray,
  },
  button: {
    height: 55,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  buttonText: {
    color: white,
  },
  resultText: {
    color: "#444",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
});


const mapStateToProps = (state, { route }) => {
  const title = route.params.title || undefined;
  const deck = state[title];
  return {
    deck,
  };
};

export default connect(mapStateToProps)(StartQuiz);