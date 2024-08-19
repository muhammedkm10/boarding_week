import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from './Actions'

function Child4() {
    const count = useSelector((state)=>state.counter)
    const dispatch = useDispatch()
    console.log("my counte",count);
    
  return (
    <div>
        <button onClick={()=>dispatch(increment(5))}>increment</button>
       <h1>{count.count}</h1>
       <button onClick={()=>dispatch(decrement(10))}>decrement</button>
    </div>
  )
}

export default Child4