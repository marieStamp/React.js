import './App.scss'
import { Provider } from "react-redux"
import { store, persistor } from "./store"
import { Router } from "./components/Router/Router"
import { PersistGate } from "redux-persist/integration/react"

function App() {
 
  return (
    <div className="App">
      <Provider store={ store }>
        <PersistGate persistor={persistor}>
       <main> 
       <Router />
      </main>
      </PersistGate>
      </Provider>
    </div>
  )
}
export default App
