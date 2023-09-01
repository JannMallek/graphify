import React from 'react'
import { Text, RandomizedLight, AccumulativeShadows } from '@react-three/drei'

export default function Visualisation({dataObject, position}) {
    console.log(dataObject)
  return (
    <>
        <AccumulativeShadows position={[0, 0.01, 0]} temporal frames={100} color='white' colorBlend={2} toneMapped={true}  scale={10}>
            <RandomizedLight amount={8} radius={4} ambient={0.5} intensity={1} position={[5, 5, -10]} bias={0.001} />
        </AccumulativeShadows>
        <group position={[0, 0, position]}>
            <mesh castShadow position={[-3, dataObject.value / 100, position -1]}>
                <boxGeometry args={[1, dataObject.value / 50, 1]}/>
                <meshStandardMaterial color={'#00ff00'}/>
            </mesh>
            <Text scale={[0.5, 0.5, 0.5]} rotation={[-0.5* Math.PI, 0, 0]} position={[0, 0.02,position-1]}>
                {
                    `${dataObject.content} : ${dataObject.value}`
                }
            </Text>
        </group>
    </>
    )
}
