import { GET_DECKS, ADD_DECK } from "../actions/index";

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
    default:
      return state;
  }
}
