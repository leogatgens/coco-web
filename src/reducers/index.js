import { combineReducers } from "redux";

import imagesReducer from './imagesReducer' 
import reviewsReducer from './reviewsReducer' 
import selectedHotelReducer from './selectedHotelReducer'



export default combineReducers({    
    selectedHotelReducer : selectedHotelReducer,
    reviewsData : reviewsReducer,
    images : imagesReducer
});