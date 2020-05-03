import { getDecks } from '../utils/api';

export const GET_DECKS = 'GET_DECKS';

function getDecksList(decks) {
  return {
    type: GET_DECKS,
    decks
  };
}

export function handleInitialData() {
  return dispatch => {
    return getDecks().then(decks => {
      dispatch(getDecksList(decks));
    });
  };
}