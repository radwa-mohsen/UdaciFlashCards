import React from "react";

import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { gray } from "../utils/colors";
import { MaterialIcons } from "@expo/vector-icons";

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
});

export const Answer = (props) => {
  const { currentQ, QLength, currentQuestion, setCurrentFace } = props;
  return (
    <React.Fragment>
      <View style={styles.textWrapper}>
        <Text style={styles.title}>
          {currentQ + 1} / {QLength}
        </Text>
        <Text style={styles.question}>{currentQuestion.answer}</Text>
      </View>
      <View>
        <TouchableOpacity
          style={[styles.button, styles.hollowButton]}
          onPress={() => setCurrentFace("question")}
        >
          <Text style={{ fontSize: 18 }}>
            <MaterialIcons name="arrow-back" size={16} color="black" /> Back to
            Question
          </Text>
        </TouchableOpacity>
      </View>
    </React.Fragment>
  );
};
