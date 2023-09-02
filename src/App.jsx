import { useState, createContext, useContext} from 'react'

import './App.css'
import Header from './Header.jsx'
import Bottom from './Bottom.jsx'
import Terminal from './Terminal.jsx'
import CanvasCom from './Canvas.jsx'

 export const globalState = createContext(null)

function App() {
  // recieve data / change data ==> rerender
  const [ params, setParams] = useState({
    data: [{content: "landwirtschaft", value: 30, id:0}, {content:"viehzucht", value:49, id:1}],
    mode:"isometric"
  })

function setGlobal(newState){
  setparams(prev=> {newState})
}
  
  
  return (
    <globalState.Provider value={{params, setParams}}>
        <Header/>
        <div className='flex justify-between app mx-8'>
          <CanvasCom/>
          <Terminal/>
        </div>
        <Bottom/>
    </globalState.Provider>
  )
}

export default App
