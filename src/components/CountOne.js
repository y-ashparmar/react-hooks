import React, { useReducer, useState } from 'react'

const initialSate = 0

const reducer=(state,action)=>{
  switch (action.type) {
    case "increment":
      console.log("action.value",state,typeof(action.value));
      return state + action.value
    case "decrement":
      return state - action.value
    case "reset":
      return initialSate
    default:
      return state
  }
}

function CountOne() {
  const [number,setNumber] = useState(0)
  const [count,dispatch] = useReducer(reducer,initialSate)
  return (
    <div>
      <input type="number" value={number} onChange={(e)=>setNumber(Number(e.target.value))} />
      <h1>{count}</h1>
      <button onClick={()=>dispatch({type:"increment" , value:number})}>Increment</button>
      <button onClick={()=>dispatch({type:"decrement" , value:number})}>Decrement</button>
      <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
    </div>
  )
}

export default CountOne