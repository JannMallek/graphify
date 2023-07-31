import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import Bottom from './Bottom.jsx'
import Canvas from './Canvas.jsx'
import Terminal from './Terminal.jsx'

function App() {

  const [canvas, setCanvas] = useState(null)

  return (
    <>
      <Header/>
      <div className='flex justify-between mx-8'>
        <Canvas canvas={canvas}/>
        <Terminal change={setCanvas}/>
      </div>
      <Bottom/>
    </>
  )
}

export default App
