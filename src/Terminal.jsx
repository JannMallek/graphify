import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Terminal() {
    const container = useRef()
 useEffect(()=>{
    gsap.to(container.current, {autoAlpha:1}) //fouc
        createTween(".hover.first", ".btn-flex.first")
        createTween(".hover.second", ".btn-flex.second")
        

        let activeButton = 1
        document.querySelectorAll(".btn-flex").forEach((button, index)=>{
            button.addEventListener("click", ()=>{
                console.log("go")
                if(activeButton != index){
                    document.querySelector(".active").classList.remove("active")
                    activeButton = index
                    let btn = activeButton!=1 ? ".first" : ".second"
                    document.querySelector(btn).classList.add("active") 

                }
              
            })
        })
 }, [])

  return (
    <div className='terminal bg-slate-50 my-8 rounded-xl'>
        <div ref={container} className='flex  rounded-xl' >
            <button className='btn-flex active first text-2xl  flex justify-center font-bold  bg-gray-300'><div className='text-bg'>Type</div><span className='hover first'></span></button>
            <button className='btn-flex  second text-2xl  flex justify-center font-bold  bg-gray-300'><div className='text-bg'>Data</div><span className='hover second'></span></button>
        </div>
    </div>
  )
}

function createTween(hover, target){
    const {top, bottom, left, right } =document.querySelector(target).getBoundingClientRect()
    const hoverElement = document.querySelector(hover)
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
