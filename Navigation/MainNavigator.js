import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Decks from "../components/Decks";
import AddDeck from "../components/AddDeck";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import DeckDetails from "../components/DeckDetails";
import { blue, white } from "../utils/colors";
import AddCard from "../components/AddCard";
import StartQuiz from "../components/StartQuiz";

const Tab = createBottomTabNavigator();

export function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Decks"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          if (route.name === "Decks") {
            return <FontAwesome name="list-alt" size={30} color={color} />;
          } else if (route.name === "Add Deck") {
            return <MaterialIcons name="library-add" size={30} color={color} />;
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
  );
}

const Stacks = createStackNavigator();

export default function MainView() {
  return (
    <Stacks.Navigator headerMode="screen">
      <Stacks.Screen
        name="Home"
        component={MainTabs}
        options={{ headerShown: false }}
      />
      <Stacks.Screen
        name="DeckDetails"
        component={DeckDetails}
        options={{
          title: "Deck Details",
          headerTintColor: white,
          headerStyle: { backgroundColor: blue },
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
      <Stacks.Screen
        name="AddCard"
        component={AddCard}
        options={{
          title: "Add Card",
          headerTintColor: white,
          headerStyle: { backgroundColor: blue },
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
      <Stacks.Screen
        name="StartQuiz"
        component={StartQuiz}
        options={{
          title: "Start Quiz",
          headerTintColor: white,
          headerStyle: { backgroundColor: blue },
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
    </Stacks.Navigator>
  );
}
