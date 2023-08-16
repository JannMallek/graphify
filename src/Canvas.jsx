import React, { useContext } from 'react'
import { Canvas } from '@react-three/fiber'

import { globalState } from './App.jsx'


export default function CanvasCom() {
  //access contents: all data changes on input using state
  const { params } = useContext(globalState)
  return (
    <Canvas className='canvas mb-8'></Canvas>
  )
}
