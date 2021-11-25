import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import { ChatsList } from "../ChatsList/ChatsList";
// import Chats from "../Chats/Chats";
import { Home } from "../Home/Home";
import { ConnectedProfile } from "../Profile/Profile";
import "./router.scss";
import { ConnectedChats } from "../Chats/Chats";
// import { addChat, deleteChat } from "../../store/chats/actions";
// import { v4 as uuidv4 } from "uuid";

// const MessageList = {
//   0: [],
//   1: [],
//   2: [],
// };

export const Router = () => {
  // const chatsList = useSelector((state) => state.chats);
  // const dispatch = useDispatch();
  // const [messages, setMessages] = useState(MessageList);

  // const handleAddChat = useCallback(
  //   (name) => {
  //     const newId = uuidv4();
  //     dispatch(addChat({ name, id: newId }));
  //     setMessages((prevMessages) => ({
  //       ...prevMessages,
  //       [newId]: [],
  //     }));
  //   },
  //   [dispatch]
  // );

  // const handleDeleteChat = useCallback(
  //   (idToDelete) => {
  //     dispatch(deleteChat(idToDelete));
  //     setMessages((prevMessages) => {
  //       const nextMessages = { ...prevMessages };
  //       delete nextMessages[idToDelete];

  //       return nextMessages;
  //     });
  //   },
  //   [dispatch]
  // );

  return (
    <BrowserRouter>
      <ul className="links">
        <li className="mainLinks">
          <Link className="eachLink" to="/">
            Home
          </Link>
        </li>
        <li className="mainLinks">
          <Link className="eachLink" to="/chats">
            Chats
          </Link>
        </li>
        <li className="mainLinks">
          <Link className="eachLink" to="/profile">
            Profile
          </Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="chats">
          <Route index element={<ChatsList />} />
          <Route path=":chatId" element={<ConnectedChats />} />
        </Route>
        <Route path="profile" element={<ConnectedProfile />} />
        <Route path="*" element={<main>404 Not Found</main>} />
      </Routes>
    </BrowserRouter>
  );
};
