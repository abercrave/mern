import { ADD_MESSAGE, REMOVE_MESSAGE } from '../constants/message-actions';

export function addMessage({ category, persist, prompt, text }) {
  return {
    type: ADD_MESSAGE,
    category,
    persist,
    prompt,
    text,
  }
}

export function removeMessage() {
  return {
    type: REMOVE_MESSAGE,
  }
}
