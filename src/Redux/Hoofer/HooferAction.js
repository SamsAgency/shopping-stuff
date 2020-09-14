import { ADD_HOOFERS, REMOVE_HOOFERS } from './HooferTypes';

export const addHoofers = () => {
    return {
        type: ADD_HOOFERS
    }
}

export const removeHoofers = () => {
    return {
        type: REMOVE_HOOFERS
    }
}