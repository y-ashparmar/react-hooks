import React ,{useState} from 'react'

function HookCounterThree() {
  const [name, setName] = useState({firstName : "", lastName:""});
  console.log(name);
  return (
    <div>
      <form>
        <input type="text" value={name.firstName} onChange={e=>setName({...name,firstName : e.target.value})}></input>
        <input type="text" value={name.lastName} onChange={e=>setName({...name,lastName : e.target.value})}></input>
        <h2>FirstName  : {name.firstName}</h2>
        <h2>LastName  : {name.lastName}</h2>
        <h2>Name  : {JSON.stringify(name)}</h2>
      </form>
    </div>
  )
}

export default HookCounterThree