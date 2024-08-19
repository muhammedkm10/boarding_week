import React, { useContext } from 'react'
import {my_context} from './context'

function Child1() {

     const {count,setCount} = useContext(my_context)
    
  return (
    <div>
    <div>child1</div>
    
    <button onClick={()=>setCount(count+1)}>clik me</button>
    <h4>{count}</h4>
    </div>
  )
}

export default Child1