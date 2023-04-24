import React, { useEffect, useRef } from 'react'

function Test() {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  }
    useEffect(()=>{
      focusInput();
    },[])
  
  return (
    <>
    <input type="text" ref={inputElement} />
    <button onClick={focusInput}>Focus Input</button>
  </>
  )
}

export default Test
