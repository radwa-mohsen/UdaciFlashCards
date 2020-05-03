import { GET_DECKS } from '../actions/index';

export default function decks(state = {}, action) {
  switch (action.type) {
    case GET_DECKS:
      return {
        ...state,
        ...action.decks
      };
    default:
      return state;
  }
} 