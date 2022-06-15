
import { Link } from 'react-router-dom';

import '../../../css/style.css';

import Loading from '../../../shared/component/Loading';
import React, { useState, useEffect,useLayoutEffect } from 'react';
import {GLOBALS} from "../../../globals/globals-variables"
import axios from "axios";
import Review from '../../home/components/Review';
import { useLocation } from 'react-router-dom';
const ListOfReviews = (props) =>{
    const [initLoading, setinitLoading] = useState(true);

    const [reviews, setReviews] = useState([{id: "",
    name: ""}]);


    const location = useLocation();
    // Scroll to top if path changes
    useLayoutEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);
  

    useEffect(() => {     
      const  consultar = async () => {         
            const serviceUrl = `${GLOBALS.rootAPI}/reviews`;;
            let config = {
              headers: {
                          "Content-Type": "application/json"
              
              }
            };
         let response =  await axios.get(serviceUrl,config);
         
         console.log(response.data);
         if(response.data.length > 0){    
            var testIfJson = response.data;
            if (typeof testIfJson == "object"){
                //Json
                console.log("soy json");
            } else {
                //Not Json
                console.log("shit");
            } 
             setReviews(response.data);
             setinitLoading(false);

         }else{
            setinitLoading(false);
         }

         
      }  
      consultar(); //Llamar la funcion definida anteriormente.Si la define asi afuera no funciona. Afuera necesita usar el [] al final
      },[]);
      const ShowReviews = () => {
        const reviewscounter = reviews.length;        
        if (initLoading ===true){
            return <Loading></Loading>
        }
        if (reviewscounter > 0) {                
            return reviews.map((item) => {
                // Construct the onClick with our bound function
                return <Review key={item.rating} data={item}></Review>;
            });

        } else {
            return <h3 className='title'>No reviews</h3>;
        }
     
    }
    return(
        <div className='container'>
            <Link to="/">Back</Link>
            <h1>ESto es la nueva pagina</h1>
            {ShowReviews()}
        </div>

    );

}

export default ListOfReviews;