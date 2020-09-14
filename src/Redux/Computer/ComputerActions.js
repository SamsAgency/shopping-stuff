import { ADD_COMPUTERS, REMOVE_COMPUTERS } from './ComputerTypes';

export const addComputers = () => {
    return {
        type: ADD_COMPUTERS
    }
}

export const removeComputers = () => {
    return {
        type: REMOVE_COMPUTERS
    }
}