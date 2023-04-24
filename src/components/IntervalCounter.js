import React, { useEffect, useState } from 'react'

function IntervalCounter() {
  const [count,setCount] = useState(0);
  const tick = () =>{
    setCount(preState => preState + 1);
  }
  
  useEffect(() => {
    console.log("call Effect");
    const interval = setInterval(tick,1000);    
    return () => {
      clearInterval(interval)
    }
  },[])
  
  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

export default IntervalCounter