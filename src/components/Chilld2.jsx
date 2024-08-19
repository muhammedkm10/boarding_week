import React, { useReducer } from 'react'
import reducer from './Reducers'

function Chilld2() {
     const initialstate = {
        'count' :0,
        'amount':1000
     }
    const [state,dispatch] = useReducer(reducer,initialstate)
    
  return (
    <div>
        <button onClick={()=>dispatch({"type":'increment',"payload":10})}>increment</button>
        <h4>{state.count}</h4>
        <button onClick={()=>dispatch({"type":'decrement',"payload":1})}>decrement</button>

    </div>

  )
}

export default Chilld2