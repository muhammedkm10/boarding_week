import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add_to_do } from './Actions'

function Child3() {
    const dispatch = useDispatch()
    const todo_list = useSelector((state)=>state.auth)
    console.log("my to do is",todo_list);
    
    
    const [value,setValue] = useState('')
    console.log(value)
  return (
    <div>
        <input type="text" onChange={(e)=>setValue(e.target.value)} value={value}/>
        <button onClick={()=>{
          setValue('')
          dispatch(add_to_do(value))}}>add</button>

        <div>
          {todo_list.map((ele)=>{
            return (
              <h1>{ele}</h1>
            )
          })}
        </div>
    </div>
  )
}

export default Child3