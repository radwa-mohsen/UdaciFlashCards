import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { gray, blue, white } from "../utils/colors";
import { connect } from "react-redux";
import { addDeck } from "../actions/index";
import { addNewDeck } from "../utils/api";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 24,
  },
  title: {
    color: blue,
    fontSize: 28,
    marginBottom: 8,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: gray,
    backgroundColor: white,
    height: 55,
    padding: 8,
    borderRadius: 7,
    fontSize: 18,
  },
  Button: {
    height: 55,
    borderRadius: 5,
    justifyContent: `center`,
    alignItems: `center`,
    backgroundColor: blue,
  },
  ButtonText: {
    color: white,
    fontSize: 20,
  },
  buttonD: {
    backgroundColor: "#ccc",
  },
});

const AddDeck = (props) => {
  const [deckName, setDeckName] = useState("");
  const { addDeck, navigation } = props;

  const handleSubmit = () => {
    addDeck(deckName);
    addNewDeck(deckName);
    setDeckName("");
    navigation.navigate("DeckDetails", {
      title: deckName,
    });
  };

  const disabled = deckName === "" ? true : false;
  return (
    <View style={styles.wrapper}>
      <View>
        <Text style={styles.title}>Deck Title: </Text>
      </View>
      <View style={{ marginBottom: 16 }}>
        <TextInput
          style={styles.input}
          placeholder="ex:JavaScript"
          value={deckName}
          onChangeText={(name) => setDeckName(name)}
          onSubmitEditing={handleSubmit}
        />
      </View>
      <TouchableOpacity
        style={[styles.Button, disabled && styles.buttonD]}
        onPress={handleSubmit}
        disabled={disabled && disabled}
      >
        <Text style={[styles.ButtonText]}>Create Deck</Text>
      </TouchableOpacity>
    </View>
  );
};

export default connect(null, { addDeck })(AddDeck);
