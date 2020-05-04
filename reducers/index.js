import { GET_DECKS, ADD_DECK, REMOVE_DECK, ADD_CARD } from "../actions/index";

export default function decks(state = {}, action) {
  switch (action.type) {
    case GET_DECKS:
      return {
        ...state,
        ...action.decks,
      };
    case ADD_DECK:
      let title = action.title;
      console.log(1,{
        ...state,
        [title]: {
          title,
          questions: [],
        },
      });
      return {
        ...state,
        [title]: {
          title,
          questions: [],
        },
      };
    case REMOVE_DECK:
      delete state[action.title];
      return {
        ...state,
      };
    case ADD_CARD:
      const _title = action.title;
      const question = action.question;
      return {
        ...state,
        [_title]: {
          ...state[_title],
          questions: [...state[_title].questions].concat(question),
        },
      };
    default:
      return state;
  }
}
