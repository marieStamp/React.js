import { AUTHORS } from "../../utils/constants";
import { v4 as uuidv4 } from "uuid";

export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const DELETE_MESSAGE = "MESSAGES::DELETE_MESSAGE";

export const addMessage = (chatId, message) => ({
  type: ADD_MESSAGE,
  payload: { chatId, message },
});

export const deleteMessage = (chatId, idToDelete) => ({
  type: DELETE_MESSAGE,
  payload: {
    chatId,
    idToDelete,
  },
});

let timeout;

export const addMessageWithReply = (chatId, message) => (dispatch) => {
  dispatch(addMessage(chatId, message));
  if (message.author !== AUTHORS.ChatBot) {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      const ChatBotMessage = {
        author: AUTHORS.ChatBot,
        id: uuidv4(),
        text: "We answer You in a minute, please, wait!",
      };
      dispatch(addMessage(chatId, ChatBotMessage));
    }, 3000);
  }
};
