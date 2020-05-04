import { getDecks } from "../utils/api";

export const GET_DECKS = "GET_DECKS";
export const ADD_DECK = "ADD_DECK";
export const REMOVE_DECK = "REMOVE_DECK";
export const ADD_CARD = "ADD_CARD";

function getDecksList(decks) {
  return {
    type: GET_DECKS,
    decks,
  };
}

export function addDeck(title) {
  return {
    type: ADD_DECK,
    title,
  };
}

export function removeDeck(title) {
  return {
    type: REMOVE_DECK,
    title,
  };
}

export function addCard(title,question) {
  return {
    type: ADD_CARD,
    title,
    question,
  };
}

export function handleInitialData() {
  return (dispatch) => {
    return getDecks().then((decks) => {
      return dispatch(getDecksList(decks));
    });
  };
}
