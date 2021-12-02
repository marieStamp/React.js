import './App.scss'
import { Provider } from "react-redux"
import { store } from "./store"
import { Router } from "./components/Router/Router"

function App() {
 
  return (
    <div className="App">
      <Provider store={ store }>
       <main> 
       <Router />
      </main>
      </Provider>
    </div>
  )
}
export default App
