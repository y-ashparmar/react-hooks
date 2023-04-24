import React ,{useContext}from 'react'
import { CountContext } from '../App'

function ComponentD() {
  const countContext = useContext(CountContext)
  return (
    <div>
      ComponentD count- {countContext.count}
    <button onClick={()=>countContext.countAction("increment")}>Increment</button>
    <button onClick={()=>countContext.countAction("decrement")}>Decrement</button>
    <button onClick={()=>countContext.countAction("reset")}>Reset</button>
</div>
  )
}

export default ComponentD