import React from 'react'
import { Text } from '@react-three/drei'

export default function Visualisation({dataObject, position}) {
    console.log(dataObject)
  return (
        <group position={[position, 0, position]}>
            <mesh scale={[0, dataObject.value, 0]}>
                <boxGeometry args={[1,1,1]}/>
                <meshStandardMaterial/>
            </mesh>
            <Text position={[position -1, 0, position - 1]}>
                {
                    `${dataObject.content} : ${dataObject.value}`
                }
            </Text>
        </group>
    )
}
