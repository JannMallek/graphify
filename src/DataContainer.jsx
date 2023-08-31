import React, { useContext } from 'react'

import { globalState } from './App.jsx'
import Visualisation from './Visualisation.jsx'

export default function DataContainer() {

    const {params} = useContext(globalState)

    return (
        <>
        {
            params.data.map((dataObject, index)=>{
                console.log(dataObject)
                return <Visualisation key={index} dataObject={dataObject} position={index}/>
            })
        }
        </>
    )
}
