import React, { useContext } from 'react'
import { Canvas, useThree } from '@react-three/fiber'

import { globalState } from './App.jsx'

import World from './World.jsx'
import DataContainer from './DataContainer.jsx'

export default function CanvasCom() {
  //access contents: all data changes on input using state
  const { theme } = useContext(globalState)
  console.log(theme)

  return (
    <Canvas className={`canvas mb-8 ${theme.colorTheme}`}>
      <DataContainer/>
      <World/>
    </Canvas>
  )
}
