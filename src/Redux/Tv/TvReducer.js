
import { ADD_TV, REMOVE_TV } from './Tvtypes';
const initalTvState = {
    price: 0,
    numberOfTv: 0
}

const tvReducer = (state = initalTvState, action) => {
    switch(action.type){
        case ADD_TV:
            return {
                price: state.price + 32000,
                numberOfTv: state.numberOfTv + 1
            }
        case REMOVE_TV:
            return {
                price: state.price - 32000,
                numberOfTv: state.numberOfTv - 1
            }
        default: return state
    }
}

export default tvReducer