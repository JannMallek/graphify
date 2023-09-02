import React, { useContext } from 'react'
import { Canvas } from '@react-three/fiber'

import { globalState } from './App.jsx'

import World from './World.jsx'
import DataContainer from './DataContainer.jsx'
import { Perf } from 'r3f-perf'

export default function CanvasCom() {
  //access contents: all data changes on input using state
  const { theme } = useContext(globalState)
  console.log(theme)

  return (
    <Canvas shadows  className={`canvas mb-8 ${theme.colorTheme}`}>
      <Perf/>
      <DataContainer/>
      <World/>
    </Canvas>
  )
}
