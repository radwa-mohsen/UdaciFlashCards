import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { Provider } from "react-redux";
import Constants from "expo-constants";
import { blue } from "./utils/colors";
import reducer from "./reducers";
import middleware from "./middleware";
import { createStore } from "redux";
import MainNav from "./Navigation/MainNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { setLocalNotification } from './utils/helpers';

const store = createStore(reducer, middleware);

function FlashCardsStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  );
}

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }
  render() {
    return (
      <Provider store={store}>
        <FlashCardsStatusBar backgroundColor={blue} barStyle="light-content" />
        <NavigationContainer>
          <MainNav />
        </NavigationContainer>
      </Provider>
    );
  }
}
