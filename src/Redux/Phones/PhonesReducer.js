
import { ADD_PHONES, REMOVE_PHONES } from './PhonesTypes';
const initalPhoneState = {
    price: 0,
    numberOfPhones: 0
}

const phoneReducer = (state = initalPhoneState, action) => {
    switch(action.type){
        case ADD_PHONES:
            return {
                price: state.price + 32000,
                numberOfPhones: state.numberOfPhones + 1
            }
        case REMOVE_PHONES:
            return {
                price: state.price - 32000,
                numberOfPhones: state.numberOfPhones - 1
            }
        default: return state
    }
}

export default phoneReducer