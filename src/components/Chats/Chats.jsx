import { useCallback, useEffect, useState } from "react"
import { Form } from "../Form/Form";
import { MessagesList } from "../MessagesList/MessagesList"
import { AUTHORS } from "../../utils/constants"
// import { ChatsList } from "../ChatsList/ChatsList"
import {
  Navigate,
  useParams,
} from "react-router"
import {v4 as uuidv4} from 'uuid'

const MessageList = {
    0: [],
    1: [],
    2: [],
    }

function Chats() {
  const { chatId } = useParams()
  // const parentRef = useRef()

  const [messages, setMessages] = useState(MessageList);

  const handleSend = useCallback(
    (nextMessage) => {
      setMessages((prevMessages) => ({
        ...prevMessages,
        [chatId]: [...prevMessages[chatId], nextMessage],
      }))
    },
    [chatId]
  )

  useEffect(() => {
    if (
      messages[chatId]?.length &&
      messages[chatId]?.[messages[chatId]?.length - 1].author !== AUTHORS.ChatBot
    ) {
      const timeout = setTimeout(
        () =>
          handleSend({
            author: AUTHORS.ChatBot,
            text: 'We answer You in a minute, please, wait!',
            id: uuidv4()
          }),
        3000
      )

      return () => clearTimeout(timeout)
    }
  }, [chatId, handleSend, messages])

  if (!messages[chatId]) {
    return <Navigate replace to="/chats" />
  }

  return (
      <>
              <h3>
                  {chatId}
              </h3>
              <div>
                  <MessagesList messages={messages[chatId]} />
              </div>
    
      <div className="form">
              <Form onSend={handleSend} />
              </div>
          </>
  )
}

export default Chats