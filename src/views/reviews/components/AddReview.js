import React from "react";
import axios from "axios";
import {GLOBALS} from "../../../globals/globals-variables"
class AddReview extends React.Component{

    constructor(props) {
        super(props);
        this.state = { review: "write your review here"};
      }
    HandleOnSubmit = (event) => {
        event.preventDefault();
        
        var newReview = {
            date: "2022-05-13",
            rating: 50,
            review: this.state.review,
            useravatar: "/sbin/cutting_edge_manager_senior.vss.cgm",
            username: "Ricky"
        }
        
        const serviceUrl = `${GLOBALS.rootAPI}/reviews`;;
        let config = {
            headers: {
                    "Content-Type": "application/json",
                    "x-api-key": GLOBALS.ApiKey                
        
            }
         };

         
        axios.post(serviceUrl,newReview ,config) //then es usando promises, se puede asignar a una variable si quiere sin promises
        .then(response =>  { this.props.onAddReview(newReview);} );
      
        
    //    const response = await axios.post('https://reqres.in/api/articles', review);
    //    this.setState({ articleId: response.data.id });
    }

    HandleOnChange = (event) => {
     
        
        this.setState({
            review : event.target.value
        });
        
    }
    render(){
        return (
        <div className="addreviewform">
            <h2>Add a new revie </h2>
            <form action="" id="new-review" onSubmit={this.HandleOnSubmit}>
                <label>Review :</label>
                <textarea type="text" value={this.state.review} onChange={this.HandleOnChange} ></textarea>
                <button type="submit"><span>Book now</span></button>
            </form>
           
        </div>);
    }
}

export default AddReview;