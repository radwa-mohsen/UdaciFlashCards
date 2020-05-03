import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Decks from "../components/Decks";
import AddDeck from "../components/AddDeck";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Decks" component={Decks} />
        <Tab.Screen name="AddDeck" component={AddDeck} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
