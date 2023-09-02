import { useEffect, useRef, useState, useContext } from "react";

import { globalState } from "./App.jsx";
import { data } from "autoprefixer";

function Input({Content = null, Value = null, id, custom = false, className}) {

    const {params, setParams} = useContext(globalState)
    const contentElement = useRef()
    const valueElement = useRef()

    useEffect(()=>{
        contentElement.current.value = Content
        valueElement.current.value = Value

    }, [])
    return ( 
        <div className={className}>
            <div onKeyDown={(e)=>{
                console.log(e)
                if(e.key !== 'Enter' ) return 
                setParams((prev)=>{
                    return {
                        data: prev.data.filter((dataObject, index)=>{
                            return index === id 
                        })
                    }
                })
            }} className="form-control flex-row gap-4 w-full my-2 ">
                <input   ref={contentElement} type="text" placeholder="Content" className="input inline input-bordered w-1/2 max-w-xs" />
                <input ref={valueElement} type="number" placeholder="Value" className="input inline input-bordered w-1/2 max-w-xs"/>
                {   

                !custom && <button onClick={()=> {
                    setParams((prev)=>{
                            return { data: prev.data.filter((dataObject)=> {
                                return dataObject.content !== Content})
                                ,mode: prev.mode   
                            }
                        })
                           
                }} className="btn btn-bg btn-square">X</button>
                }
                {
                custom && <button onClick={()=> {
                    setParams((prev)=>{
                            return { 
                                data: [...prev.data, {content: contentElement.current.value, value: JSON.parse(valueElement.current.value), id: prev.data.lenght}]
                                ,mode: prev.mode   
                            }
                        })
                           
                }} className="btn btn-bg btn-square">Add</button>
                }
                
            </div>
        </div>
     );
}

function AddInput( props){

    return (
        <Input {...props} custom={true}></Input>
    )
}

export {AddInput}
export default Input;