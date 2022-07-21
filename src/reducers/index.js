import { combineReducers } from "redux";

import imagesReducer from './imagesReducer' 
import reviewsReducer from './reviewsReducer' 




export default combineReducers({    
    reviewsData : reviewsReducer,
    images : imagesReducer
});