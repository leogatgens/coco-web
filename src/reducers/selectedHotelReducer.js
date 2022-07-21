export default  (state = null,action) =>{
    if (action.type === "HOTEL_SELECTED"){
        console.log(action);        
        return action.payload;
    }
    return state;
};
