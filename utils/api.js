import { AsyncStorage } from "react-native";
import { decks } from "./_DATA";

export const FLASHCARD_STORAGE_KEY = "Udacity:FlashCards";

export function getDecks() {
  return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY).then((flashCards) => {
    if (flashCards === null) {
      AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(decks));
      return decks;
    }
    return JSON.parse(flashcards);
  });
}
