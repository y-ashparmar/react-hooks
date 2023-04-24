import React ,{useState} from 'react'

function HookCounterTwo() {
  let [count, setCount] = useState(0);
  const IncrementFive =()=>{
    for (let i = 0; i < 5; i++) {
      setCount(pState=>pState+1);
    }
  }
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count = 0)}> Reset</button>
      <button onClick={() => setCount(count + 1)}> Increment</button>
      <button onClick={() => setCount(count - 1)}> Decrement</button>
      <button onClick={IncrementFive}> Increment 5</button>
    </div>
  )
}

export default HookCounterTwo