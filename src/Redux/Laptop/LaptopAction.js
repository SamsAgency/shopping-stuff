import { ADD_LAPTOPS, REMOVE_LAPTOPS } from './LaptopTypes';

export const addLaptops = () => {
    return {
        type: ADD_LAPTOPS
    }
}

export const removeLaptops = () => {
    return {
        type: REMOVE_LAPTOPS
    }
}