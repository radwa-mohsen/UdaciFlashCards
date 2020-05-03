import { getDecks } from "../utils/api";

export const GET_DECKS = "GET_DECKS";
export const ADD_DECK = "ADD_DECK";

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

export function handleInitialData() {
  return (dispatch) => {
    return getDecks().then((decks) => {
      return dispatch(getDecksList(decks));
    });
  };
}
