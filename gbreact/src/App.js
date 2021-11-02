import './App.scss'
import { SayHello } from './components/Message/Message'

function App() {
  
  return (
    <div className="App">
      <header className="App_header">
        <SayHello message={'Hello, my Friend'} />
        
      </header>
    </div>
  );
  }
export default App;
