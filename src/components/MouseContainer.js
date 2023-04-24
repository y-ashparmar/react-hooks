import React, { useState } from 'react'
import HookMouseMover from './HookMouseMover';

function MouseContainer() {
  const [Display,setDisplay] =useState(true);
  return (
    <div>
      <button onClick={()=>setDisplay(!Display) } >Toggle Display</button>
      {Display && <HookMouseMover/>}
    </div>
  )
}

export default MouseContainer