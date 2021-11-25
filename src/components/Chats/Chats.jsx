import { useCallback } from "react";
import { Form } from "../Form/Form";
import { MessagesList } from "../MessagesList/MessagesList";
import { ChatsList } from "../ChatsList/ChatsList";
import { Navigate, useParams } from "react-router";
import { connect } from "react-redux";
import { addMessageWithReply } from "../../store/messages/actions";
import "./chats.scss";

function Chats({ messages, sendMessage }) {
  const { chatId } = useParams();

  const handleSend = useCallback(
    (nextMessage) => {
      sendMessage(chatId, nextMessage);
    },
    [chatId, sendMessage]
  );

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
  sendMessage: addMessageWithReply,
};

export const ConnectedChats = connect(
  mapStateToProps,
  mapDispatchToProps
)(Chats);
