//Third part components
import '../../../css/style.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import React, { useState, useEffect,useLayoutEffect } from 'react';
import axios from "axios";
//Components coco web
import {GLOBALS} from "../../../globals/globals-variables"
import Review from '../../home/components/Review';
import Loading from '../../../shared/component/Loading';
import AddReview from '../components/AddReview';

const ListOfReviews = (props) =>{
    const [initLoading, setinitLoading] = useState(true);
    const [reviews, setReviews] = useState([{id: "",name: ""}]);
    const algo = reviews.ski.filter()

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
         
        
         if(response.data.length > 0){    
            var testIfJson = response.data;     
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
 
    useEffect(() => {     
    },[reviews]);

    const onAddReview = (newReview) =>{    
        var actualReviews = reviews;
        actualReviews = actualReviews.push(newReview);
       setReviews(actualReviews);
       console.log(reviews);
    }
    return(
        <div className='container'>
            <Link to="/">Back</Link>
            <AddReview onAddReview={onAddReview}></AddReview>            
            <h1>All reviews</h1>
            {ShowReviews()}
        </div>

    );

}

export default ListOfReviews;