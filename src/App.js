import Child1 from "./components/child1";
import React, { Children } from "react";
import Provider_component from "./components/context";
import Chilld2 from "./components/Chilld2";
import Child3 from "./components/Child3";
import { Provider } from "react-redux";
import store from "./components/store";
import Child4 from "./components/Child4";
function App() {
  
  return (
    <>
    <Provider_component>
         <Child1 />
         <h1>halo</h1>

    </Provider_component>

    <Chilld2></Chilld2>
    <Provider store={store}>
      
    <Child3/>
    <Child4/>
    </Provider>
    
        </>
    
  );
}

export default App;
