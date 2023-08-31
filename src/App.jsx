import { useState, createContext, useContext} from 'react'

import './assets/App.css'
import Header from './assets/Header.jsx'
import Bottom from './assets/Bottom.jsx'
import Terminal from './Terminal.jsx'
import CanvasCom from './Canvas.jsx'

 export const globalState = createContext(null)

function App() {
  // recieve data / change data ==> rerender
  const [ params, setParams] = useState({
    data: [{content: "landwirtschaft", value: 30}, {content:"viehzucht", value:49}],
    mode:"isometric"
  })

  const [theme, setTheme] = useState({
    colorTheme: "white",
    colorPalette: ['#003fef', '#2343ff']
  })
  
  return (
    <globalState.Provider value={{params, setParams, theme, setTheme}}>
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
