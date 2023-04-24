import React, { useContext } from 'react'
import { ChannelContext, CountContext, UserContext } from '../App'

function ComponentF() {
  const countContext = useContext(CountContext)
  return (
    <div>
      ComponentF count- {countContext.count}
      <button onClick={()=>countContext.countAction("increment")}>Increment</button>
      <button onClick={()=>countContext.countAction("decrement")}>Decrement</button>
      <button onClick={()=>countContext.countAction("reset")}>Reset</button>
    </div>
    // <UserContext.Consumer>
    //   {
    //     user=>{
    //       return (
    //           <ChannelContext.Consumer>
    //           {
    //             channel=>{
    //               return <div>UserContext value = {user.fname} ChannelContext value = {channel[0]}</div>
    //             }
    //           }
    //           </ChannelContext.Consumer>
    //       )
    //     }
    //   }
    // </UserContext.Consumer>
  )
}

export default ComponentF