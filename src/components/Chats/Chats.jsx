import { useCallback, useEffect } from "react";
import { Form } from "../Form/Form";
import { MessagesList } from "../MessagesList/MessagesList";
import { AUTHORS } from "../../utils/constants";
import { ChatsList } from "../ChatsList/ChatsList";
//import { Router } from "../Router/Router"
import { Navigate, useParams } from "react-router";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";
import { addMessage } from "../../store/messages/actions";
import "./chats.scss";

// const MessageList = {
//     0: [],
//     1: [],
//     2: [],
//     }

function Chats({ messages, sendMessage }) {
  const { chatId } = useParams();
  // const parentRef = useRef()

  // const [messages, setMessages] = useState(MessageList);

  const handleSend = useCallback(
    (nextMessage) => {
      sendMessage(chatId, nextMessage);
    },
    [chatId, sendMessage]
  );

  useEffect(() => {
    if (
      messages[chatId]?.length &&
      messages[chatId]?.[messages[chatId]?.length - 1].author !==
        AUTHORS.ChatBot
    ) {
      const timeout = setTimeout(
        () =>
          handleSend({
            author: AUTHORS.ChatBot,
            text: "We answer You in a minute, please, wait!",
            id: uuidv4(),
          }),
        3000
      );

      return () => clearTimeout(timeout);
    }
  }, [chatId, handleSend, messages]);

  if (!messages[chatId]) {
    return <Navigate replace to="/chats" />;
  }

  return (
    <div className="chats">
      <ChatsList />
      <div>
        <MessagesList messages={messages[chatId]} />

        <div className="form">
          <Form onSend={handleSend} />
        </div>
      </div>
    </div>
  );
}

export default Chats;

const mapStateToProps = (state) => ({
  messages: state.messages,
});

const mapDispatchToProps = {
  sendMessage: addMessage,
};

export const ConnectedChats = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chats);
