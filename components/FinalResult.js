import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { blue, gray } from "../utils/colors";
import { FontAwesome } from "@expo/vector-icons";

const styles = StyleSheet.create({
  textWrapper: {
    justifyContent: "center",
    flex: 1,
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
  resultText: {
    color: "#444",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
});

export const FinalResult = (props) => {
  const { correct, QLength, navigation } = props;
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
          {((correct / QLength) * 100).toFixed(0) >= 50
            ? "Awsome !!!"
            : "Study Hard && Try Again"}
        </Text>
        <Text style={[styles.resultText, { color: blue, fontSize: 32 }]}>
          Quiz Result:
        </Text>
        <Text style={styles.resultText}>
          {((correct / QLength) * 100).toFixed(0)}%
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={[styles.button, styles.hollowButton]}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={{ fontSize: 18 }}>
            <FontAwesome name="list-alt" size={16} color="black" /> Decks List
          </Text>
        </TouchableOpacity>
      </View>
    </React.Fragment>
  );
};
