import './App.scss'
// import { Form } from "./components/Form/Form"
// import { useCallback, useEffect, useState } from "react"
// import { MessagesList } from "./components/MessagesList/MessagesList"
// import {v4 as uuidv4} from 'uuid'
// import { AUTHORS } from './utils/constants'
// import { ChatsList } from './components/ChatsList/ChatsList'
import Router from "./components/Router/Router"

function App() {
  // const MessageList = []

  // const [messages, setMessages] = useState(MessageList);
  // const handleSend = useCallback((nextMessage) => {
  //   setMessages(prevMessage => [...prevMessage, nextMessage])
  // }, [])

  // useEffect(() => {
  //   if(messages.length && messages[messages.length - 1].author !== AUTHORS.ChatBot)
  //   {
  //     const timeout = setTimeout(() => handleSend({
  //       author: 'ChatBot',
  //       text: 'We answer You in a minute, please, wait!',
  //       id: uuidv4()
  //     }), 3000)
  //     return() => clearTimeout(timeout)
  //   }
  // }, [handleSend, messages, uuidv4()])

  return (
    <div className="App">
      {/* <div className="wrapper">
      <header className="App_header"> 
      
       </header> */}
       <main> 
       <Router />
      </main>
     {/* </div> */}
       {/* <footer>
      </footer>  */}
    </div>
  )
}
export default App
