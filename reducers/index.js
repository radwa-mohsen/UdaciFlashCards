import { GET_DECKS, ADD_DECK, REMOVE_DECK } from "../actions/index";

export default function decks(state = {}, action) {
  switch (action.type) {
    case GET_DECKS:
      return {
        ...state,
        ...action.decks,
      };
    case ADD_DECK:
      let title = action.title;
      return {
        ...state,
        title: {
          title,
          questions: [],
        },
      };
    case REMOVE_DECK:
      delete state[action.title];
      return {
        ...state,
      };
    default:
      return state;
  }
}
