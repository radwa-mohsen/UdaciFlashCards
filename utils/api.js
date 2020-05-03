import { AsyncStorage } from "react-native";
import { decks } from "./_DATA";

export const FLASHCARD_STORAGE_KEY = "Udacity:FlashCards";

export async function getDecks() {
  try {
    const flashCards = await AsyncStorage.getItem(FLASHCARD_STORAGE_KEY);

    if (flashCards === null) {
      AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(decks));
    }

    return flashCards === null ? decks : JSON.parse(flashCards);
  } catch (err) {
    console.log(err);
  }
}
