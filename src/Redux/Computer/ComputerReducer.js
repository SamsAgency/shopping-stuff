import { ADD_COMPUTERS, REMOVE_COMPUTERS } from './ComputerTypes';

const initialComputerState = {
    price: 0,
    numberOfComputers: 0
}

const computerReducer = (state = initialComputerState, action) => {
    switch(action.type){
        case ADD_COMPUTERS: 
            return {
                price: state.price + 20000,
                numberOfComputers: state.numberOfComputers + 1
            }
        case REMOVE_COMPUTERS:
            return {
                price: state.price - 20000,
                numberOfComputers: state.numberOfComputers - 1
            }
        default: return state
    }
}

export default computerReducer