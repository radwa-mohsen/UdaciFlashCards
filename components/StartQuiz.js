import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { View, StyleSheet, ScrollView, Dimensions } from "react-native";
import { white, gray } from "../utils/colors";
import { setLocalNotification, clearLocalNotification } from "../utils/helpers";
import { Question } from "./Question";
import { Answer } from "./Answer";
import { FinalResult } from "./FinalResult";

const WindowWidth = Dimensions.get("window").width;

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
    borderColor: gray,
    justifyContent: "space-between",
    width: WindowWidth - 32,
  },
});
function StartQuiz(props) {
  //state
  const [currentFace, setCurrentFace] = useState("question");
  const [currentQ, setCurrentQ] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

  const QLength = props.deck.questions.length;
  const currentQuestion = props.deck.questions[currentQ];

  const handleAnswerQuestion = (answer) => {
    answer == "correct"
      ? setCorrect(correct + 1)
      : answer == "incorrect" && setIncorrect(incorrect + 1);
    currentQ <= QLength - 2
      ? setCurrentQ(currentQ + 1)
      : setCurrentFace("result");
  };

  useEffect(() => {
    clearLocalNotification().then(setLocalNotification);
  });

  return (
    <ScrollView
      style={styles.viewWrapper}
      pagingEnabled={true}
      horizontal={true}
    >
      <View style={styles.contentWrapper}>
        {currentFace == "question" && (
          <Question
            currentQ={currentQ}
            QLength={QLength}
            currentQuestion={currentQuestion}
            handleAnswerQuestion={handleAnswerQuestion}
            setCurrentFace={setCurrentFace}
          />
        )}
        {currentFace == "answer" && (
          <Answer
            currentQ={currentQ}
            QLength={QLength}
            currentQuestion={currentQuestion}
            setCurrentFace={setCurrentFace}
          />
        )}
        {currentFace == "result" && (
          <FinalResult
            correct={correct}
            QLength={QLength}
            navigation={props.navigation}
          />
        )}
      </View>
    </ScrollView>
  );
}

const mapStateToProps = (state, { route }) => {
  const title = route.params.title || undefined;
  const deck = state[title];
  return {
    deck,
  };
};

export default connect(mapStateToProps)(StartQuiz);
