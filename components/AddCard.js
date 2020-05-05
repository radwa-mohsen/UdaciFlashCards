import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { gray, blue, white, red } from "../utils/colors";
import { addCard } from "../actions/index";
import { addQuestionAPI } from "../utils/api";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 8,
  },
  label: {
    fontSize: 28,
    marginBottom: 16,
    color: blue,
  },
  input: {
    borderWidth: 1,
    borderColor: gray,
    backgroundColor: white,
    padding: 8,
    borderRadius: 7,
    fontSize: 18,
    height: 55,
  },
  button: {
    height: 55,
    borderRadius: 7,
    justifyContent: `center`,
    alignItems: `center`,
    backgroundColor: blue,
    marginTop: 24,
  },
  submit: {
    color: white,
    fontSize: 18,
  },
  btnDisabled: {
    backgroundColor: "#ccc",
  },
});

const AddCard = (props) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const { addCard, title, navigation } = props;

  const handleSubmit = () => {
    addCard(title, {
      question,
      answer,
    });
    addQuestionAPI(title, {
      question,
      answer,
    });
    navigation.navigate("DeckDetails", {
      title,
    });
  };
  const disabled = question === "" || answer === "" ? true : false;

  return (
    <View style={styles.wrapper}>
      <View style={{ marginBottom: 8 }}>
        <Text style={styles.label}>{title} Deck: </Text>
        <Text style={styles.label}>Question: </Text>
      </View>
      <View style={{ marginBottom: 8 }}>
        <TextInput
          style={[styles.input, { marginBottom: 8 }]}
          placeholder="Enter The Question...*"
          value={question}
          onChangeText={(value) => setQuestion(value)}
          onSubmitEditing={handleSubmit}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter The Answer...*"
          value={answer}
          onChangeText={(value) => setAnswer(value)}
          onSubmitEditing={handleSubmit}
        />
      </View>
      <TouchableOpacity
        style={[styles.button, disabled && styles.btnDisabled]}
        onPress={handleSubmit}
        disabled={disabled && disabled}
      >
        <Text style={[styles.submit]}>Submit Question</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state, { route }) => {
  const title = route.params.title || undefined;
  return {
    title,
  };
};

export default connect(mapStateToProps, { addCard })(AddCard);
