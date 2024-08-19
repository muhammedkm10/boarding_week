import { createStore } from "redux"
import {authreducer,counter} from './reducer.js'
import { combineReducers } from "redux"

const combinedreducer =  combineReducers({
    auth:authreducer,
    counter:counter

})
const store = createStore(combinedreducer)

export default store