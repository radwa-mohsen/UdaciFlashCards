import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import { blue, white } from "../utils/colors";

function DeckDetails(props) {
  const { deck, navigation } = props;
  navigation.setOptions({
    title: deck.title,
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{deck.title}</Text>
      <Text>
        {deck.questions.length === 0
          ? "No Cards"
          : deck.questions.length === 1
          ? `${deck.questions.length} card`
          : `${deck.questions.length} cards`}
      </Text>
      <TouchableOpacity
        style={[styles.btn, { marginTop: 20 }]}
        onPress={() => navigation.navigate("AddCard", { deck: deck })}
      >
        <Text style={styles.text}>Add Card</Text>
      </TouchableOpacity>
      {deck.questions.length !== 0 && (
        <TouchableOpacity
          style={styles.btn}
          onPress={() =>
            navigation.navigate("StartQuiz", { title: deck.title })
          }
        >
          <Text style={styles.text}>Start Quiz</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    width: 100,
    padding: 8,
    margin: 8,
    backgroundColor: blue,
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: white,
  },
  title: {
    fontSize: 40,
    paddingBottom: 20,
  },
});
function mapStatesToPros(decks, { route }) {
  const { title } = route.params;
  return {
    deck: decks[title],
  };
}

export default connect(mapStatesToPros)(DeckDetails);
