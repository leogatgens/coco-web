import {GLOBALS} from '../globals/globals-variables'
import axios from "axios";
//Action creator
export const  selectHotel = (hotel) =>{
    return{
        type: 'HOTEL_SELECTED',
        payload : hotel
    };
}

export const fetchReviews = (reviewsData) =>
{    
    return async (dispatch) => {
    const serviceUrl = `${GLOBALS.rootAPI}/reviews`;;
    let config = {
      headers: {
                  "Content-Type": "application/json"
                 ,"x-api-key": GLOBALS.ApiKey
      }
    };
      let response =  await axios.get(serviceUrl,config );
      dispatch({type : 'FETCH_REVIEWS', payload : response.data});
    }
}

export const fetchImages = (imagesData) =>
{    
    return async (dispatch) => {
    const serviceUrl = `${GLOBALS.rootAPI}/gallery`;;
    let config = {
      headers: {
                  "Content-Type": "application/json"
                 ,"x-api-key": GLOBALS.ApiKey
      }
    };
      let response =  await axios.get(serviceUrl,config );
      dispatch({type : 'FETCH_IMAGES', payload : response.data});
    }
}