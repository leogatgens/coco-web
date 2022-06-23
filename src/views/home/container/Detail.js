
import Review from '../components/Review';
import React, { useState, useEffect } from 'react';
import Loading from '../../../shared/component/Loading';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import {GLOBALS} from "../../../globals/globals-variables"
const Detail = (props) => {  
    const [initLoading, setinitLoading] = useState(true);
    const [reviews, setReviews] = useState([{id: "",
    name: ""}]);


    useEffect(() => {     
      const  consultar = async () => {         
            const serviceUrl = `${GLOBALS.rootAPI}/reviews`;;
            let config = {
              headers: {                          
                          "Content-Type": "application/json",
                          "x-api-key": "5Vqg81rmkG59NzsKm22qi3S3MOnZyYhvaymCXVN7"                        
              
              }
            };
         
         let response =  await axios.get(serviceUrl,config ) ;
         
         
         if(response.data.length > 0){    
            var testIfJson = response.data;
            // if (typeof testIfJson == "object"){
            //     //Json
            //     console.log("soy json");
            // } else {
            //     //Not Json
            //     console.log("shit");
            // } 
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
            return <Loading/>
        }
        if (reviewscounter > 0) {
            var filteredItems = reviews;
            
            filteredItems = filteredItems.filter(item => item.rating < 3);      
            return filteredItems.map((item) => {
                // Construct the onClick with our bound function
                return <Review key={item.rating} data={item}></Review>;
            });

        } else {
            return <h3 className='title'>No reviews</h3>;
        }
     
    }

    const navigate = useNavigate();
   const ShowMessage = (e)  =>{
 
     navigate('/allreviews')
  
    }
  
    const ShowBookNowPage = (e) =>{
        alert("Redirect to new page booking");
        
    }
return(          
    
    <div className="detail">
    <div className="description">
        <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
        </p>
        <p className="paragraph">
            Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.
        </p>
        <ul className="list">
            <li className="list__item">Close to the beach</li>
            <li className="list__item">Breakfast included</li>
            <li className="list__item">Free airport shuttle</li>
            <li className="list__item">Free wifi in all rooms</li>
            <li className="list__item">Air conditioning and heating</li>
            <li className="list__item">Pets allowed</li>
            <li className="list__item">We speak all languages</li>
            <li className="list__item">Perfect for families</li>
        </ul>
        <div className="recommend">
            <p className="recommend__count">
                Lucy and 3 other friends recommend this hotel.
            </p>
            <div className="recommend__friends">
                <img src="img/user-3.jpg" alt="Friend 1" className="recommend__photo"/>
                <img src="img/user-4.jpg" alt="Friend 2" className="recommend__photo"/>
                <img src="img/user-5.jpg" alt="Friend 3" className="recommend__photo"/>
                <img src="img/user-6.jpg" alt="Friend 4" className="recommend__photo"/>
            </div>
        </div>
    </div>

    <div className="user-reviews">
        {ShowReviews()} 
        <button className="btn-inline" onClick={ShowMessage}>Show all <span>&rarr;</span></button>
    </div>

    <div className="cta">
        <h2 className="cta__book-now">
            Good news! We have 4 free rooms for your selected dates!
        </h2>
        <button className="btn" onClick={ShowBookNowPage}>
            <span className="btn__visible">Book now</span>
            <span className="btn__invisible">Only 4 rooms left</span>
        </button>
    </div>

</div>
)


  
}

export default Detail;