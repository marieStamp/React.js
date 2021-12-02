import { createStore, combineReducers } from "redux";
import { messagesReducer } from "./messages/reducer";
import { profileReducer } from "./profile/reducer";
import { chatsReducer } from "./chats/reducer";

export const store = createStore(
  combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    messages: messagesReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
