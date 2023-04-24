import React ,{useEffect, useState}from 'react'

function HookMouseMover() {
  const [x,setX] =useState(0);
  const [y,setY] =useState(0);
  const logMousePosition = e=>{
    console.log("mouse event");
    setX(e.clientX)
    setY(e.clientY)
  }
  useEffect(()=>{
    console.log("useEffect");
    window.addEventListener('mousemove',logMousePosition);
    return ()=>{
      console.log("Component will unmount");
      window.removeEventListener('mousemove',logMousePosition);
    }
  },[])
  return (
    <div>Mouse Pointer x - {x}, y - {y}</div>
  )
}

export default HookMouseMover