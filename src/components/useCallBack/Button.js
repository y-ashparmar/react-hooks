import React from 'react'

function Button({clickHandle, children}) {
  console.log("Rendering  Button - ", children );
  return (
    <>
      <button onClick={clickHandle} > {children} </button>
    </>
  )
}

export default React.memo(Button)