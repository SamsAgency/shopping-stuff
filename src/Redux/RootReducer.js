
import { combineReducers } from 'redux';
import computerReducer from './Computer/ComputerReducer';
import hooferReducer from './Hoofer/HooferReducer';
import laptopReducer from './Laptop/LaptopReducer';
import phoneReducer from './Phones/PhonesReducer';
import tvReducer from './Tv/TvReducer';


const rootReducer = combineReducers({
    computer: computerReducer,
    hoofer: hooferReducer,
    laptop: laptopReducer,
    phone: phoneReducer,
    tv: tvReducer
})

export default rootReducer