import { useContext, useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

import { globalState } from './App.jsx'

export default function Terminal({}) {
    
    //update globalState
    const {params, setParams} = useContext(globalState)
    //hover effects
    const container = useRef()
    useEffect(()=>{
      gsap.to(container.current, {autoAlpha:1}) //fouc
        createTween(".hover.first", ".btn-flex.first")
        createTween(".hover.second", ".btn-flex.second")
        
        //toggle active
        let activeButton = 1
        document.querySelectorAll(".btn-flex").forEach((button, index)=>{
            button.addEventListener("click", ()=>{
                if(activeButton != index + 1){
                  
                    document.querySelector(".active").classList.remove("active", "btn-bg")
                    activeButton = index+ 1
                    let btn = activeButton!=2 ? ".first" : ".second"
                    document.querySelector(btn).classList.add("active", "btn-bg")

                }
              
            })
        })
 }, [])


  return (
    <div className='terminal bg-slate-50 my-8 rounded-xl'>
        <div ref={container} className='flex  rounded-xl' >
            <button className='btn-flex btn-bg active first text-2xl  flex justify-center font-semibold  bg-gray-300'><div className=''>Type</div><span className='hover first'></span></button>
            <button className='btn-flex        second text-2xl  flex justify-center font-semibold  bg-gray-300'><div className=''>Data</div><span className='hover second'></span></button>
        </div>
        <div className="content">
          {
            //TODO options: absolute or relative output, total value, color theme: pick for Each, palette 
            //TODO changes on mode: chart options
            // data.forEach((element) => (
            //   <div className='dataInput'>
            //     {
            //       //TODO remove button, name and value input, color + mode.current.data
            //     }
              // </div>
            // ))
          }
        </div>
    </div>
  )
}
//hover animation
function createTween(hover, target){
    gsap.set(hover, {scaleX:0, transformOrigin:"left center"})
    const tl = gsap.timeline({paused:true, defaults:{duration:0.5}, delay:0.2})
    let exitTime = 0

    tl.to(hover, {scaleX:1.1})
    .addPause("exit")
    exitTime = tl.duration()
    tl.to(hover, {x: 500})
    

    let btn = document.querySelector(target)

    btn.addEventListener("mouseenter", () => {
        if(tl.time() < exitTime){
          tl.play()
        } else {
          tl.restart()
        }
      })
      
      btn.addEventListener("mouseleave", () => {
            tl.reverse()
      })



}