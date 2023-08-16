import { useState, createContext, useContext} from 'react'

import './App.css'
import Header from './Header.jsx'
import Bottom from './Bottom.jsx'
import Terminal from './Terminal.jsx'
import CanvasCom from './Canvas.jsx'

 export const globalState = createContext(null)

function App() {
  // recieve data / change data ==> rerender
  const [ params, setparams] = useState({
    data: ["test"]
  })
  
  
  return (
    <globalState.Provider value={{params, setparams}}>
        <Header/>
        <div className='flex justify-between h-screen mx-8'>
          <CanvasCom/>
          <Terminal/>
        </div>
        <Bottom/>
    </globalState.Provider>
  )
}

export default App
