export default (state = [],action) =>{
    switch (action.type){
        case "FETCH_REVIEWS" :{
            console.log(action);        
            return action.payload;
        }       
        default : return state; // never return undefined
    }
};