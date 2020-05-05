import React, { Component } from "react";
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

class AddDeck extends Component {
  state = {
    name: "",
  };

  handleSubmit = () => {
    this.props.addDeck(this.state.name);
    addNewDeck(this.state.name);
    this.setState({
      name: "",
    });
    this.props.navigation.navigate("DeckDetails", {
      title: this.state.name,
    });
  };

  render() {
    const disabled = this.state.name === "" ? true : false;
    return (
      <View style={styles.wrapper}>
        <View>
          <Text style={styles.title}>Deck Title: </Text>
        </View>
        <View style={{ marginBottom: 16 }}>
          <TextInput
            style={styles.input}
            placeholder="ex:JavaScript"
            value={this.state.name}
            onChangeText={(name) => this.setState({ name })}
            onSubmitEditing={this.handleSubmit}
          />
        </View>
        <TouchableOpacity
          style={[styles.Button, disabled && styles.buttonD]}
          onPress={this.handleSubmit}
          disabled={disabled && disabled}
        >
          <Text style={[styles.ButtonText]}>Create Deck</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

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
    // marginBottom: 0,
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

export default connect(null, { addDeck })(AddDeck);
