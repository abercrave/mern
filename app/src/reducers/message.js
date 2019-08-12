import { ADD_MESSAGE, REMOVE_MESSAGE } from '../constants/message-actions';

const initialState = {
  category: '',
  persist: false,
  prompt: '',
  text: '',
};

function message(state = initialState, { category, persist, prompt, text, type }) {
  switch (type) {
    case ADD_MESSAGE:
      return {
        ...state,
        category,
        persist,
        prompt,
        text,
      };

    case REMOVE_MESSAGE:
      return {
        ...state,
        ...initialState,
      };

    default:
      return state;
  }
}

export default message;
