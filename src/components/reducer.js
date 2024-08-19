const initialstate = {
    count :0
}
const counter = (state = initialstate , action) => {
    switch(action.type){
        case 'INCR':
            return {...state,count:state.count+action.payload}
        case 'DECRE':
            return {...state,count:state.count-action.payload}
        default:
            return state
    }

}
const initialtodo = []

const authreducer = (state = initialtodo , action) =>{
    switch(action.type){
        case 'ADD_TO_DO':
            return [...state,action.payload]
        default:
            return state
    }

}
export { authreducer,counter}

