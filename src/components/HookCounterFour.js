import React ,{useState} from 'react'

function HookCounterFour() {
const [list, setList] = useState([]);
const addItem  = ()=>{
  setList([...list,{id : list.length,value : Math.random()} ])
}
  return (
    <div>
      <button onClick={addItem}>Add item</button>
      <ul>
        {
          list.map((list)=>(
          <li key={list.id}>{list.value}</li>))
        }
      </ul>
    </div>
  )
}

export default HookCounterFour