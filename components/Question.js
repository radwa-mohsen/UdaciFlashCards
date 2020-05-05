import React from "react";

import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { white, blue, red, gray } from "../utils/colors";

const styles = StyleSheet.create({
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
});
export const Question = (props) => {
  const {
    currentQ,
    QLength,
    currentQuestion,
    handleAnswerQuestion,
    setCurrentFace,
  } = props;
  return (
    <React.Fragment>
      <View style={styles.textWrapper}>
        <Text style={styles.title}>
          {currentQ + 1} / {QLength}
        </Text>
        <Text style={styles.question}>{currentQuestion.question}</Text>
      </View>
      <View>
        <TouchableOpacity
          style={[styles.button, styles.hollowButton]}
          onPress={() => setCurrentFace("answer")}
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
