
import { ADD_HOOFERS, REMOVE_HOOFERS } from './HooferTypes';
const initalHooferState = {
    price: 0,
    numberOfHoofers: 0
}

const hooferReducer = (state = initalHooferState, action) => {
    switch(action.type){
        case ADD_HOOFERS:
            return {
                price: state.price + 32000,
                numberOfHoofers: state.numberOfHoofers + 1
            }
        case REMOVE_HOOFERS:
            return {
                price: state.price - 32000,
                numberOfHoofers: state.numberOfHoofers - 1
            }
        default: return state
    }
}

export default hooferReducer