import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { connect } from "react-redux";
import { handleInitialData, removeDeck } from "../actions";
import { white, blue, gray } from "../utils/colors";
import { FontAwesome } from "@expo/vector-icons";
import { removeDeckAPI } from "../utils/api";

export class Decks extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    console.log(this.props);
    const handleRemove = (title) => {
      this.props.removeDeck(title);
      removeDeckAPI(title);
    };
    return (
      <ScrollView style={styles.decksWrapper}>
        <Text style={styles.title}>Mobile Flashcards</Text>
        <Text style={styles.subTitle}>Decks</Text>

        {Object.values(this.props.decks).map((deck, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() =>
                this.props.navigation.navigate("DeckDetails", {
                  title: deck.title,
                })
              }
            >
              <View style={styles.card} key={index}>
                <Text style={[styles.deckText, { fontWeight: "bold" }]}>
                  {deck.title}
                </Text>
                <Text style={styles.deckCardsNo}>
                  {deck.questions.length == 0
                    ? "No cards in this deck"
                    : `Number of cards is: ${deck.questions.length}`}
                </Text>
                <TouchableOpacity onPress={() => handleRemove(deck.title)}>
                  <FontAwesome
                    name="trash"
                    size={30}
                    color="tomato"
                    style={{ textAlign: "right" }}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        })}
        <View style={{ marginBottom: 30 }} />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  decksWrapper: {
    flex: 1,
    padding: 12,
    backgroundColor: white,
  },
  title: {
    fontSize: 28,
    textAlign: "center",
    marginBottom: 12,
    color: blue,
  },
  subTitle: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 12,
    color: blue,
  },
  card: {
    padding: 8,
    textAlign: "center",
    marginBottom: 8,
    borderColor: gray,
    borderWidth: 1,
    borderRadius: 8,
  },
  deckText: {
    fontSize: 30,
    marginBottom: 8,
    color: gray,
  },
  deckCardsNo: {
    fontSize: 20,
    marginBottom: 8,
    color: gray,
  },
});
const mapStateToProps = (state) => ({
  decks: state,
});

export default connect(mapStateToProps, { handleInitialData, removeDeck })(
  Decks
);
