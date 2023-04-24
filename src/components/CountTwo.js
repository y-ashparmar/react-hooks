import React, { useReducer, useState } from 'react'

const initialSate = {
  FirstCount : 0,
  SecondCount : 10
}

const reducer=(state,action)=>{
  switch (action.type) {
    case "increment":
      return {...state,FirstCount: state.FirstCount + action.value}
    case "decrement":
      return {...state,FirstCount : state.FirstCount - action.value}
    case "increment2":
      return {...state,SecondCount: state.SecondCount + action.value}
    case "decrement2":
      return {...state,SecondCount : state.SecondCount - action.value}
    case "reset":
      return initialSate
    default:
      return state
  }
}

function CountTwo() {
  const [number,setNumber] = useState(0)
  const [count,dispatch] = useReducer(reducer,initialSate)
  return (
    <div>
      {/* <input type="text" name="FirstCount" onChange={()=>dispatch({type:"change"})}/> */}
      <h1>FirstCount--{count.FirstCount}</h1>
      <h1>SecondCount--{count.SecondCount}</h1>
      <button onClick={()=>dispatch({type:"increment",value : 1})}>Increment</button>
      <button onClick={()=>dispatch({type:"decrement",value : 1})}>Decrement</button>
      <button onClick={()=>dispatch({type:"increment",value : 5})}>Increment Five</button>
      <button onClick={()=>dispatch({type:"decrement",value : 5})}>Decrement Five</button>
      <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
      <div>
        <button onClick={()=>dispatch({type:"increment2",value : 1})}>Increment SecondCount</button>
        <button onClick={()=>dispatch({type:"decrement2",value : 1})}>Decrement SecondCount</button>
      </div>
    </div>
  )
}

export default CountTwo