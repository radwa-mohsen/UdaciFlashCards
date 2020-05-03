import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Decks from "../components/Decks";
import AddDeck from "../components/AddDeck";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Decks"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            if (route.name === "Decks") {
              return <FontAwesome name="list-alt" size={30} color={color} />;
            } else if (route.name === "Add Deck") {
              return (
                <MaterialIcons name="library-add" size={30} color={color} />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
          tabStyle: {
            marginTop: 8,
          },
        }}
      >
        <Tab.Screen name="Decks" component={Decks} />
        <Tab.Screen name="Add Deck" component={AddDeck} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
