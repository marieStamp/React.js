import './App.scss'
import { Form } from "./components/Form/Form"
import { useCallback, useEffect, useState, useRef } from "react"
import { MessagesList } from "./components/MessagesList/MessagesList"
import {v4 as uuidv4} from 'uuid'
import { AUTHORS } from './utils/constants'
import { ChatsList } from './components/ChatsList/ChatsList'

function App() {
  const MessageList = []
  const inputRef = useRef();
  let myId = uuidv4()

  const [messages, setMessages] = useState(MessageList);
  const handleSend = useCallback((nextMessage) => {
    setMessages(prevMessage => [...prevMessage, nextMessage])
  }, [])

  useEffect(() => {
    inputRef.current?.focus()
    if(messages.length && messages[messages.length - 1].author !== AUTHORS.ChatBot)
    {
      const timeout = setTimeout(() => handleSend({
        author: 'ChatBot',
        text: 'We answer You in a minute, please, wait!',
        id: myId
      }), 3000)
      return() => clearTimeout(timeout)
    }
  }, [handleSend, messages, myId])

  return (
    <div className="App">
      <div className="wrapper">
      <header className="App_header">
      ChatBot
      </header>
      <main>
        <div className="chats">
      <ChatsList />
      <MessagesList messages={ messages } />
      </div>
      </main>
      </div>
      <footer>
      <Form onSend={ handleSend } />
      </footer>
    </div>
  );
}
export default App;
