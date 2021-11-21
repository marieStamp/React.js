import './App.scss'
// import { SayHello } from './components/Message/Message'
// import { Counter } from "./components/Counter/Counter";
import { Form } from "./components/Form/Form"
import { useCallback, useEffect, useState } from "react"
import { MessagesList } from "./components/MessagesList/MessagesList"
import {v4 as uuidv4} from 'uuid'

function App() {
  const MessageList = []

  let myId = uuidv4()
  const [messages, setMessages] = useState(MessageList);
  const handleSend = useCallback((nextMessage) => {
    setMessages(prevMessage => [...prevMessage, nextMessage])
  }, [])

  useEffect(() => {
    if(messages.length && messages[messages.length - 1].author !== 'ChatBot')
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
      <MessagesList messages={ messages } />
      </main>
      </div>
      <footer>
      <Form onSend={ handleSend }/>
      </footer>
    </div>
  );
}
export default App;
