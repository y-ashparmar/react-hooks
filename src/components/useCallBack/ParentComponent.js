import React, { useCallback, useState } from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

function ParentComponent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(25000);

  const incrementAge = useCallback(()=> {
    return setAge(preState=> preState + 1);
  }, [age])
  const incrementSalary = useCallback(()=> {
    return setSalary(preState => preState + 1000);
  },[salary])
  
  return (
    <>
      <Title/>
      <Count text="Age" count={age} />
      <Button clickHandle={incrementAge}> Increment age </Button>
      <Count text="Salary" count={salary}/>
      <Button clickHandle={incrementSalary}> Increment salary </Button>
    </>
  )
}

export default ParentComponent