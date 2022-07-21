import { combineReducers } from "redux";

import getDataReducer from './demoReducer' 
import selectedHotelReducer from './selectedHotelReducer'



export default combineReducers({    
    selectedHotelReducer : selectedHotelReducer,
    reviewsData : getDataReducer
});