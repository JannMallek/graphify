import { OrbitControls } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useControls } from 'leva'
import React from 'react'

export default function World() {
  let camera
  const { ambientIntensity, directionalIntensity, directionalPosition } = useControls('world',{ambientIntensity: 0.5, directionalIntensity: 2, directionalPosition: [0,0,0]})
  useThree((state)=>{
      state.camera.position.set(2, 3.3, 4.4)
      camera = state.camera
  })

  return (
    <>
      <mesh receiveShadow rotation={[-0.5*Math.PI,0,0]}>
          <planeGeometry args={[10, 10]}/>
          <meshStandardMaterial color={'#fff'}/>
      </mesh>
      <directionalLight args={['#fff',0.5]} position={[0, 3, 2]} lookAt={[0,0,0]}/>
      <ambientLight args={['#fff', 1]}/>
      <OrbitControls/>
    </>
  )
}
