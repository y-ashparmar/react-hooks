import React, { useMemo, useState } from 'react'

function Counter() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const incrementCountOne = ()=> {
    return setCountOne(preState => preState + 1);
  }

  const incrementCountTwo = ()=> {
    setCountTwo(preState => preState + 1);
  }

  const isEven = useMemo(()=> {
    let i = 0;
    while(i < 2000000000) i++;
    return countOne % 2 === 0
  },[countOne])

  console.log("incrementCountOne",incrementCountOne);
  console.log("isEven", isEven);
  // console.log("incrementCountOne",incrementCountOne());

  return (
    <div>
      <button onClick={incrementCountOne}>Count One - {countOne}</button>
      <span>{isEven ? " Even" : " Odd" }</span>
      <br/>
      <button onClick={incrementCountTwo}>Count Two - {countTwo}</button>
    </div>
  )
}

export default Counter