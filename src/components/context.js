import React, { Children, useState } from 'react'

export const my_context = React.createContext()



function Provider_component({children}) {
const  [count,setCount] = useState(false)

  return (
    <my_context.Provider value={{count,setCount}}>
     {children}
      </my_context.Provider>
      
    
  )
}

export default Provider_component