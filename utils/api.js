import { AsyncStorage } from "react-native";
import { decks } from "./_DATA";

export const FLASHCARD_STORAGE_KEY = "Udacity:FlashCards";

export async function getDecks() {
    const flashCards = await AsyncStorage.getItem(FLASHCARD_STORAGE_KEY);
    if (flashCards === null) {
      AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(decks));
    }
    return flashCards === null ? decks : JSON.parse(flashCards);
  
}

export async function addNewDeck(title) {
  await AsyncStorage.mergeItem(
    FLASHCARD_STORAGE_KEY,
    JSON.stringify({
      [title]: {
        title,
        questions: [],
      },
    })
  );
}

export async function removeDeckAPI(key) {
  const results = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
  const decks = JSON.parse(results);
  decks[key] = undefined;
  delete decks[key];
  AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
}

export async function addQuestionAPI(title, question) {
  const results = await AsyncStorage.getItem(FLASHCARD_STORAGE_KEY);
  const deck = await JSON.parse(results)[title];

  await AsyncStorage.mergeItem(
    FLASHCARD_STORAGE_KEY,
    JSON.stringify({
      [title]: {
        questions: [...deck.questions, question],
      },
    })
  );
}
