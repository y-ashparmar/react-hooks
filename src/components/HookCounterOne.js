import React , {useState, useEffect, useRef} from 'react'

function HookCounterOne() {
  const [count, setCount] = useState(0);
  const [name ,setName] = useState("")
  const prevRef = useRef();
  useEffect(()=>{
    let pnm = prevRef.current;
     if(pnm !== name){
      //console.log(prevRef.current = name);
      console.log("name updated");
      // document.title = `clicked ${count} times`
   }
  },[name])
  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={()=>setCount(count+1)} >Click {count} Times</button>
    </div>
  )
}

export default HookCounterOne