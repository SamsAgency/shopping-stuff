import { ADD_PHONES, REMOVE_PHONES } from './PhonesTypes';

export const addPhone = () => {
    return {
        type: ADD_PHONES
    }
}

export const removePhone = () => {
    return {
        type: REMOVE_PHONES
    }
}