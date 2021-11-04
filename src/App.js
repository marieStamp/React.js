import './App.scss'
import { SayHello } from './components/Message/Message'
import { Counter } from "./components/Counter/Counter";
import { Form } from "./components/Form/Form";
import { useState } from "react";

function App() {
  const [text, setText] = useState("i am a prop");
  const [showCounter, setShowCounter] = useState(true);
  const [messages, setMessages] = useState(["text1", "text2"]);

  const handleClick = () => {
    alert("click");
    setText("123" + Math.random());
  };

  const handleToggleCounter = () => {
    setShowCounter((prevShow) => !prevShow);
  };
  return (
    <div className="App">
      <header className="App_header">
        {/* <SayHello message='Hello, my Friend' />
        
      </header>
    </div>
  );
  } */
  messages.map((mes) => (
    <div>{mes}</div>
  ))}
  <SayHello message={text} onMessageClick={handleClick} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={handleToggleCounter}>
          {showCounter ? "hide " : "show "} counter
        </button>
        {/* {showCounter && <Counter text={text} />} */}
        <Form />
      </header>
    </div>
  );
}
export default App;
