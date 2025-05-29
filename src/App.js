import React, { useState } from 'react'

export default function () {

  let [count,setCount]=useState(0);

  let Increcount=()=>{
    setCount((preState)=>preState+1);
    setCount((preState)=>preState+1);
    setCount((preState)=>preState+1);
    setCount((preState)=>preState+1);
    setCount((preState)=>preState+1);
  }

  return (
    <div>
      <h1>Counter</h1>
      <h3>Count - {count}</h3>
      <button onClick={Increcount}>Increment</button>
    </div>
  )
}
