import { useEffect, useRef, useState, useContext } from "react";

import { globalState } from "./App.jsx";
import { data } from "autoprefixer";

function Input({Content = null, Value = null, id}) {

    const {params, setParams} = useContext(globalState)
    const contentElement = useRef()
    const valueElement = useRef()

    useEffect(()=>{
        contentElement.current.value = Content
        valueElement.current.value = Value

    }, [])
    return ( 
        <div>
            <div className="form-control flex-row gap-4 w-full ">
                <input ref={contentElement} type="text" placeholder="Content" className="input inline input-bordered w-1/2 max-w-xs" />
                <input ref={valueElement} type="number" placeholder="Value" className="input inline input-bordered w-1/2 max-w-xs"/>
                <button onClick={()=> {
                    setParams((prev)=>{
                            return { data: prev.data.filter((dataObject, index)=> {
                                return dataObject.content !== Content})
                                ,mode: prev.mode   
                            }
                        })
                           
                }} className="btn btn-bg btn-square">X</button>
            </div>
        </div>
     );
}

export default Input;