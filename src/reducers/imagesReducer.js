export default (state = [],action) =>{ //Siempre se ejecuta con el valor default
    
    switch (action.type){
        case "FETCH_IMAGES" : {                         
            return action.payload;
        }
        default : return state; // never return undefined
    }
};