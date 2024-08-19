const ADD_TO_DO = 'ADD_TO_DO'

function add_to_do (text){
    return {
        type : ADD_TO_DO,
        payload:text
    }

    
}

const incr = "INCR"
const decr = "DECRE"

function increment (value){
    return {
        type:incr,
        payload:value
    }
}
function decrement (value){
    return { 
        type:decr,
        payload:value
    }
}
export {add_to_do,increment,decrement}