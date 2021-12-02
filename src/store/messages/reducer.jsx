import { ADD_CHAT, DELETE_CHAT } from "../chats/actions";
import { ADD_MESSAGE, DELETE_MESSAGE } from "./actions";

const initialMessages = {};

export const messagesReducer = (state = initialMessages, { payload, type }) => {
  switch (type) {
    case ADD_MESSAGE:
      return {
        ...state,
        [payload.chatId]: [...state[payload.chatId], payload.message],
      };
    case DELETE_MESSAGE: {
      const nextMessages = { ...state };
      nextMessages[payload.chatId] = nextMessages[payload.chatId].filter(
        ({ id }) => id !== payload.idToDelete
      );

      return nextMessages;
    }

    case ADD_CHAT:
      return {
        ...state,
        [payload.id]: [],
      };
    case DELETE_CHAT: {
      const nextMessages = { ...state };
      delete nextMessages[payload.chatId];

      return nextMessages;
    }
    default:
      return state;
  }
};
