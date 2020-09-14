
import { ADD_LAPTOPS, REMOVE_LAPTOPS } from './LaptopTypes';
const initalLaptopState = {
    price: 0,
    numberOfLaptops: 0
}

const laptopReducer = (state = initalLaptopState, action) => {
    switch(action.type){
        case ADD_LAPTOPS:
            return {
                price: state.price + 32000,
                numberOfLaptops: state.numberOfLaptops + 1
            }
        case REMOVE_LAPTOPS:
            return {
                price: state.price - 32000,
                numberOfLaptops: state.numberOfLaptops - 1
            }
        default: return state
    }
}

export default laptopReducer