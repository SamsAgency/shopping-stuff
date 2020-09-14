
import { ADD_TV, REMOVE_TV } from './Tvtypes';

export const addTv = () => {
    return {
        type: ADD_TV
    }
}

export const removeTv = () => {
    return {
        type: REMOVE_TV
    }
}